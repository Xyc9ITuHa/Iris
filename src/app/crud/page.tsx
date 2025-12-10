"use client";

import { useTransition } from "react";

export default function Crud() {
    const [isPending, startTransition] = useTransition();

    function handleAction(action: FormData) {
        startTransition(() => {
            void fetch("/api/crud", {
                method: "POST",
                body: action,
            });
        });
    }

    return (
        <div style={{ padding: "2rem" }}>
            <h1>CRUD Demo</h1>
            <p>This page runs all CRUD operations using Prisma.</p>

            <form action={handleAction}>
                <fieldset>
                    <legend>Create Manufacturer</legend>
                    <input type="hidden" name="action" value="createManufacturer" />
                    <label>
                        Name: <input name="name" required />
                    </label>
                    <button type="submit">Create</button>
                </fieldset>
            </form>

            <form action={handleAction}>
                <fieldset>
                    <legend>Update Manufacturer</legend>
                    <input type="hidden" name="action" value="updateManufacturer" />
                    <label>
                        ID: <input name="id" required />
                    </label>
                    <label>
                        New Name: <input name="name" required />
                    </label>
                    <button type="submit">Update</button>
                </fieldset>
            </form>

            <form action={handleAction}>
                <fieldset>
                    <legend>Delete Manufacturer</legend>
                    <input type="hidden" name="action" value="deleteManufacturer" />
                    <label>
                        ID: <input name="id" required />
                    </label>
                    <button type="submit">Delete</button>
                </fieldset>
            </form>

            <form action={handleAction}>
                <fieldset>
                    <legend>Read Manufacturers</legend>
                    <input type="hidden" name="action" value="readManufacturers" />
                    <button type="submit">Load All</button>
                </fieldset>
            </form>

            {isPending && <p>Loading...</p>}
        </div>
    );
}
