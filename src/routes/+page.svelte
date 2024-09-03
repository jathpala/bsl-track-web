<main>
    <form method="POST">
        <h1>BSL Track</h1>
        <label>
            <span>Email</span>
            <input type="email" name="email" />
        </label>
        <label>
            <span>Password</span>
            <input type="password" name="password" />
        </label>
        <button type="submit">Sign In</button>
    </form>
</main>

<style lang="scss">
@use "$styles/theme" as *;

main {
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
}

form {
    border-style: solid;
    border-width: 2px;
    border-color: $muted-color;
    border-radius: 1rem;
    padding: 2rem;
    display: grid;
    grid-template-columns: max-content 1fr;
    align-items: center;
    column-gap: 0.8em;
    row-gap: 1.4em;

    h1 {
        grid-column: 1/3;
        text-align: center;
        color: $brand-color;
        font-family: $brand-font;
        font-size: 1.6rem;
        font-weight: 400;
        font-style: italic;
    }

    button {
        grid-column: 1/3;
        width: fit-content;
        justify-self: center;
        padding-inline: 0.6em;
        padding-block: 0.4em;
        border-style: solid;
        border-color: $accent-color;
        border-radius: 0.8em;
        background-color: $accent-color;
        color: $background-color;
        cursor: pointer;

        &:hover {
            border-color: adjust-color($accent-color, $lightness: 4%);
            background-color: adjust-color($accent-color, $lightness: 4%);
        }
    }

    input {
        padding-inline: 0.6em;
        padding-block: 0.4em;
        border-radius: 0.5em;
        border-style: solid;
        border-width: 1px;
        border-color: $muted-color;
        font-weight: 400;
        width: 16em;

        &:focus {
            border-color: $accent-color;
            outline: none;
        }
    }

    label {
        display: contents;
        gap: 0.4em;
        font-weight: 500;

        & > span {
            text-align: right;

            &::after {
                content: ":";
            }
        }
    }
}
</style>