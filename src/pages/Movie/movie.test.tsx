import { describe, expect, it } from "vitest";
import {
    render,
    screen,
    waitForElementToBeRemoved,
    userEvent
} from "@/utils/test-utils";
import { searchResult } from "@/mocks/handlers";
import MoviePage from "./index";

describe('Movie Page', async () => {
    it("Should return result when clicking search button", async () => {
        render(<MoviePage />);

        const input = screen.getByRole("textbox");
        await userEvent.type(input, "Batman");
        
        expect(screen.getByRole("button", { name: "Search" })).toBeDefined();
        userEvent.click(screen.getByTestId("searchButton"));
    
        expect(await screen.queryByLabelText("Loading")).toBeDefined();
    
        waitForElementToBeRemoved(screen.queryByLabelText('Loading')).then(() => {
            searchResult.Search.forEach((item) => {
                expect(screen.getByText(item.Title)).toBeDefined();
            });
        })
    });

    it("Able to nominated the movie", async () => {
        render(<MoviePage />);
    
        const input = screen.getByRole("textbox");
        await userEvent.type(input, "Batman");
        
        expect(screen.getByRole("button", { name: "Search" })).toBeDefined();
        userEvent.click(screen.getByTestId("searchButton"));
    
        expect(await screen.queryByLabelText("Loading")).toBeDefined();
        
        expect(screen.queryByLabelText("You dont have nominated movie")).toBeDefined();
        waitForElementToBeRemoved(screen.queryByLabelText('Loading')).then(() => {
            let itemToToggle = searchResult.Search[0];
            const firstItem = screen.getByTestId(`set-nominated-${itemToToggle.imdbID}`);
            userEvent.click(firstItem);
            expect(screen.queryByLabelText("You dont have nominated movie")).toBeDefined();

            expect(screen.getByTestId(`remove-nominated-${itemToToggle.imdbID}`)).toBeDefined();
        })
    });
})

