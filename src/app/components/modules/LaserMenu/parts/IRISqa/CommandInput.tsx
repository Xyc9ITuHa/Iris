"use client";
import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './CommandInput.module.sass';

const COMMANDS = ['pw', 'wl', 'tp', 'mf', 'cl', 'md', 'ap', 'ps', 'st'];

interface ParsedCommand {
    command: string;
    value: string;
    isValid: boolean;
}

export default function CommandInput() {
    const [buffer, setBuffer] = useState('');
    const [parsedCommands, setParsedCommands] = useState<ParsedCommand[]>([]);
    const [remainingText, setRemainingText] = useState('');
    const [animKey, setAnimKey] = useState(0);
    const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const clearTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const router = useRouter();
    const searchParams = useSearchParams();

    const parseBuffer = (text: string): { commands: ParsedCommand[], remaining: string } => {
        const commands: ParsedCommand[] = [];
        let remaining = text;

        const regex = /\\(\w+)(?:\s+'([^']*)'|\s+(\S+))?/g;
        let match;
        let lastIndex = 0;

        while ((match = regex.exec(text)) !== null) {
            const [fullMatch, command, quotedValue, normalValue] = match;
            const value = quotedValue || normalValue || '';
            const isValid = COMMANDS.includes(command.toLowerCase());

            commands.push({
                command: command.toLowerCase(),
                value,
                isValid
            });

            lastIndex = regex.lastIndex;
        }

        if (lastIndex > 0) {
            remaining = text.slice(lastIndex).trim();
        } else if (commands.length === 0) {
            remaining = text;
        }

        return { commands, remaining };
    };

    const executeSearch = useCallback((searchText: string) => {
        const { commands, remaining } = parseBuffer(searchText);

        const params = new URLSearchParams(searchParams.toString());

        if (commands.length === 0 || !commands.some(c => c.isValid)) {
            if (remaining.trim()) {
                params.set('search', remaining.trim());
            }
            router.push(`?${params.toString()}`);
            return;
        }

        commands.forEach(({ command, value, isValid }) => {
            if (!isValid) return;

            switch (command) {
                case 'pw':
                    if (value) params.set('power', value);
                    break;
                case 'wl':
                    if (value) params.set('wavelength', value);
                    break;
                case 'tp':
                    if (value) params.set('type', value);
                    break;
                case 'mf':
                    if (value) params.set('manufacturer', value);
                    break;
                case 'cl':
                    if (value) params.set('cooling', value);
                    break;
                case 'md':
                    if (value) params.set('modulation', value);
                    break;
                case 'ap':
                    if (value) params.set('application', value);
                    break;
                case 'ps':
                    params.set('pulse', 'true');
                    break;
                case 'st':
                    params.set('stability', 'true');
                    break;
            }
        });

        if (remaining) {
            params.set('search', remaining);
        }

        router.push(`?${params.toString()}`);
    }, [router, searchParams]);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
                return;
            }

            if (e.key === 'Enter') {
                e.preventDefault();
                const { commands } = parseBuffer(buffer);
                const hasInvalidCommands = commands.some(c => !c.isValid);

                if (buffer.trim() && !hasInvalidCommands) {
                    executeSearch(buffer);
                }
                setBuffer('');
                return;
            }

            if (e.key === 'Escape') {
                setBuffer('');
                return;
            }

            if (e.key === 'Backspace') {
                e.preventDefault();
                setBuffer(prev => prev.slice(0, -1));
                setAnimKey(prev => prev + 1);
                return;
            }

            if (e.key.length === 1) {
                e.preventDefault();
                setBuffer(prev => prev + e.key);
                setAnimKey(prev => prev + 1);
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [buffer, executeSearch]);

    useEffect(() => {
        if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
        if (clearTimeoutRef.current) clearTimeout(clearTimeoutRef.current);

        if (buffer.length > 0) {
            const parsed = parseBuffer(buffer);
            setParsedCommands(parsed.commands);
            setRemainingText(parsed.remaining);

            // Clear buffer after 5 seconds
            clearTimeoutRef.current = setTimeout(() => {
                setBuffer('');
                setParsedCommands([]);
                setRemainingText('');
            }, 5000);
        } else {
            setParsedCommands([]);
            setRemainingText('');
        }

        return () => {
            if (clearTimeoutRef.current) clearTimeout(clearTimeoutRef.current);
        };
    }, [buffer]);

    const renderStyledBuffer = () => {
        if (!buffer) return null;

        return (
            <>
                {parsedCommands.map((cmd, i) => (
                    <span key={i}>
                        <span
                            className={`${styles.command} ${cmd.isValid ? styles.validCommand : styles.invalidCommand
                                }`}
                            key={`${i}-${animKey}`}
                        >
                            \{cmd.command}
                        </span>
                        {cmd.value && (
                            <span className={styles.queryText}> {cmd.value}</span>
                        )}
                        {' '}
                    </span>
                ))}
                {remainingText && (
                    <span className={styles.regularText}>{remainingText}</span>
                )}
            </>
        );
    };

    if (!buffer) return null;

    return (
        <div
            className={styles.feedbackBox}
            key={animKey}
        >
            <div className={styles.styledText}>
                {renderStyledBuffer()}
            </div>
        </div>
    );
}