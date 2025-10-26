import { render, screen } from "@testing-library/react";
import { AppWithRoutes } from "./AppWithRoutes";
import userEvent from '@testing-library/user-event'

describe('Navbar navigation tests', () => {

    it('show home component on home click', async () => {
        render(<AppWithRoutes />)
        const user = userEvent.setup()
        const homeButton = screen.getByText('Home');

        await user.click(homeButton);

        const home = screen.getByTestId('HomeMock')
        expect(home).toBeInTheDocument();
    })

    it('show About component on about click', async () => {
        render(<AppWithRoutes />)
        const user = userEvent.setup()
        const aboutButton = screen.getByText('About');

        await user.click(aboutButton);

        const about = screen.getByTestId('AboutMock')
        screen.debug()
        expect(about).toBeInTheDocument();
    })

    it('show Posts component on posts click', async () => {
        render(<AppWithRoutes />)
        const user = userEvent.setup()
        const postsButton = screen.getByText('Posts');

        await user.click(postsButton);

        const posts = screen.getByTestId('PostsMock')
        expect(posts).toBeInTheDocument();
    })
})