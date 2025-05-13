import { render, screen } from '@testing-library/react';
import Loading from './Loading'

describe('Loading component', () => {
    it('should render loading ', () => {
        render(
        <Loading isLoading={true}>
            <h1>Exemple</h1>
        </Loading>)

        const loader = screen.getByRole('status');
        const children = screen.queryByRole('heading', {
            name: /Exemple/i,
            level: 1
        });

        expect(loader).toBeInTheDocument();
        expect(children).not.toBeInTheDocument();
    })

    it('should render child component if loading state is false', () => {
        render(
            <Loading isLoading={false}>
                <h1>Exemple</h1>
            </Loading>) 

            const loader = screen.queryByRole('status');
            const children = screen.getByRole('heading', {
                name: /Exemple/i,
                level: 1
            });

            expect(loader).not.toBeInTheDocument();
            expect(children).toBeInTheDocument();
    })
})