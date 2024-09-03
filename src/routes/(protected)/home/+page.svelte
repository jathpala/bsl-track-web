<script>

export let data

const {
    readings
} = data

let bsl
let date
let time
</script>

<form method="POST" action="?/saveReading">
    <fieldset class="data">
        <label>
            <span>BSL</span>
            <input type="number" name="bsl" min="0" max="50" step="0.1" bind:value={bsl} />
        </label>

        <label>
            <span>Date</span>
            <input type="date" name="date" bind:value={date} />
        </label>

        <label>
            <span>Time</span>
            <input type="time" name="time" bind:value={time} />
        </label>
    </fieldset>

    <fieldset class="controls">
        <button type="reset">Clear</button>
        <button type="submit" class="primary">Save</button>
    </fieldset>
</form>

<table>
    <thead>
        <tr>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">BSL</th>
            <th scope="col"></th>
        </tr>
    </thead>
    <tbody>
        {#each readings as reading}
            <tr>
                <td>{reading.date}</td>
                <td>{reading.time}</td>
                <td>{reading.bsl}</td>
                <td></td>
                <!-- <td><a href={`/patients/${patient.mrn}`}><IconGo /></a></td> -->
            </tr>
        {/each}
    </tbody>
</table>

<style lang="scss">
@use "$styles/theme" as *;


form {
    margin-inline: auto;
    margin-top: 4rem;
    margin-bottom: 8rem;
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    fieldset {
        border-style: none;
        display: grid;
        grid-template-columns: max-content 1fr;
        align-items: center;
        column-gap: 0.8em;
        row-gap: 1.4em;

        &.controls {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 0.6em;

            button {
                padding-inline: 0.6em;
                padding-block: 0.4em;
                border-style: solid;
                border-color: $accent-color;
                border-radius: 0.8em;
                background-color: $background-color;
                color: $accent-color;
                cursor: pointer;

                &:hover {
                    color: adjust-color($accent-color, $lightness: 4%);
                    border-color: adjust-color($accent-color, $lightness: 4%);
                    background-color: adjust-color($background-color, $lightness: -2%);
                }

                &.primary {
                    background-color: $accent-color;
                    color: $background-color;

                    &:hover {
                        background-color: adjust-color($accent-color, $lightness: 4%);
                    }
                }
            }
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
        width: 12em;

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


table {
    margin-inline: auto;
    border-collapse: collapse;
    border-color: $accent-color;
    border-width: 2px;
    border-style: solid;

    tr {
        cursor: pointer;

        &:hover {
            background-color: adjust-color($background-color, $lightness: -12%);
        }

        &:nth-child(2n) {
            background-color: adjust-color($accent-color, $lightness: 32%, $saturation: -10%);

            &:hover {
                background-color: adjust-color($accent-color, $lightness: 28%, $saturation: -10%);
            }
        }
    }

    th,
    td {
        font-size: 0.9rem;
        padding-block: 0.8em;
        padding-inline: 2em;
        text-align: left;
        min-width: 5em;
        border-color: $accent-color;
        border-width: 1px;
        border-style: solid;
        border-inline-style: none;
    }

    th {
        cursor: default;
        color: $background-color;
        font-weight: 600;
        font-style: italic;
        background-color: adjust-color($accent-color, $lightness: 10%, $saturation: -5%);
    }
}
</style>