import { Card } from './Card';
import {
    InitAsteroidsState,
    PageContext,
    AsteroidsContext,
    InitPageState,
} from '../App';
import {
    screen,
    render,
    fireEvent,
} from '@testing-library/react';
import { PageState } from '../Reducers/Reducers';

const mockDispatchAsteroids = jest.fn();
const mockDispatchPage = jest.fn();

describe('Card components', () => {
    test('button to add to destroy array', () => {
        const scene = render(
            <AsteroidsContext.Provider
                value={{
                    state: InitAsteroidsState,
                    dispatch:
                        mockDispatchAsteroids,
                }}
            >
                <PageContext.Provider
                    value={{
                        state: InitPageState,
                        dispatch:
                            mockDispatchPage,
                    }}
                >
                    <Card
                        name=""
                        date=""
                        distance={0}
                        size={0}
                        grade="не опасен"
                    />
                </PageContext.Provider>
            </AsteroidsContext.Provider>
        );
        const button =
            screen.getByRole('button');
        expect(button).toBeInTheDocument();

        fireEvent.click(button);
        expect(
            mockDispatchAsteroids
        ).toHaveBeenCalled();
    });

    test('show distance in kilometers', () => {
        const scene = render(
            <AsteroidsContext.Provider
                value={{
                    state: InitAsteroidsState,
                    dispatch:
                        mockDispatchAsteroids,
                }}
            >
                <PageContext.Provider
                    value={{
                        state: InitPageState,
                        dispatch:
                            mockDispatchPage,
                    }}
                >
                    <Card
                        name=""
                        date=""
                        distance={100}
                        size={0}
                        grade="не опасен"
                    />
                </PageContext.Provider>
            </AsteroidsContext.Provider>
        );

        const distance =
            screen.getByText(/100/);

        expect(distance).toBeInTheDocument();
    });

    const ChangedPageState: PageState = {
        show: false,
        units: 1,
    };

    test('show distance in lunar distances', () => {
        const scene = render(
            <AsteroidsContext.Provider
                value={{
                    state: InitAsteroidsState,
                    dispatch:
                        mockDispatchAsteroids,
                }}
            >
                <PageContext.Provider
                    value={{
                        state: ChangedPageState,
                        dispatch:
                            mockDispatchPage,
                    }}
                >
                    <Card
                        name=""
                        date=""
                        distance={595820}
                        size={0}
                        grade="не опасен"
                    />
                </PageContext.Provider>
            </AsteroidsContext.Provider>
        );

        const distance =
            screen.getByText(/1.55/);

        expect(distance).toBeInTheDocument();
    });
});

describe('asteroids images', () => {
    test('small asteroid image', () => {
        const scene = render(
            <AsteroidsContext.Provider
                value={{
                    state: InitAsteroidsState,
                    dispatch:
                        mockDispatchAsteroids,
                }}
            >
                <PageContext.Provider
                    value={{
                        state: InitPageState,
                        dispatch:
                            mockDispatchPage,
                    }}
                >
                    <Card
                        name=""
                        date=""
                        distance={0}
                        size={150}
                        grade="не опасен"
                    />
                </PageContext.Provider>
            </AsteroidsContext.Provider>
        );

        const image = screen.getByAltText(
            'Маленький астероид'
        ) as HTMLImageElement;
        expect(image).toBeInTheDocument();
        expect(image.src).toContain(
            'asteroid1'
        );
    });

    test('medium asteroid image', () => {
        const scene = render(
            <AsteroidsContext.Provider
                value={{
                    state: InitAsteroidsState,
                    dispatch:
                        mockDispatchAsteroids,
                }}
            >
                <PageContext.Provider
                    value={{
                        state: InitPageState,
                        dispatch:
                            mockDispatchPage,
                    }}
                >
                    <Card
                        name=""
                        date=""
                        distance={0}
                        size={450}
                        grade="не опасен"
                    />
                </PageContext.Provider>
            </AsteroidsContext.Provider>
        );

        const image = screen.getByAltText(
            'Средний астероид'
        ) as HTMLImageElement;
        expect(image).toBeInTheDocument();
        expect(image.src).toContain(
            'asteroid2'
        );
    });

    test('big asteroid image', () => {
        const scene = render(
            <AsteroidsContext.Provider
                value={{
                    state: InitAsteroidsState,
                    dispatch:
                        mockDispatchAsteroids,
                }}
            >
                <PageContext.Provider
                    value={{
                        state: InitPageState,
                        dispatch:
                            mockDispatchPage,
                    }}
                >
                    <Card
                        name=""
                        date=""
                        distance={0}
                        size={750}
                        grade="не опасен"
                    />
                </PageContext.Provider>
            </AsteroidsContext.Provider>
        );

        const image = screen.getByAltText(
            'Большой астероид'
        ) as HTMLImageElement;
        expect(image).toBeInTheDocument();
        expect(image.src).toContain(
            'asteroid3'
        );
    });
});

describe('card colors', () => {
    test('green card for non-hazardous asteroids', () => {
        const scene = render(
            <AsteroidsContext.Provider
                value={{
                    state: InitAsteroidsState,
                    dispatch:
                        mockDispatchAsteroids,
                }}
            >
                <PageContext.Provider
                    value={{
                        state: InitPageState,
                        dispatch:
                            mockDispatchPage,
                    }}
                >
                    <Card
                        name=""
                        date=""
                        distance={0}
                        size={0}
                        grade="не опасен"
                    />
                </PageContext.Provider>
            </AsteroidsContext.Provider>
        );

        const grade =
            screen.getByText(/не опасен/);
        expect(grade).toHaveStyle(
            'background: linear-gradient(90deg, #cff37d 0%, #7de88c 100%);'
        );
    });

    test('red card for hazardous asteroids', () => {
        const scene = render(
            <AsteroidsContext.Provider
                value={{
                    state: InitAsteroidsState,
                    dispatch:
                        mockDispatchAsteroids,
                }}
            >
                <PageContext.Provider
                    value={{
                        state: InitPageState,
                        dispatch:
                            mockDispatchPage,
                    }}
                >
                    <Card
                        name=""
                        date=""
                        distance={0}
                        size={0}
                        grade="опасен"
                    />
                </PageContext.Provider>
            </AsteroidsContext.Provider>
        );

        const grade =
            screen.getByText(/опасен/);
        expect(grade).toHaveStyle(
            'background: linear-gradient(90deg, #ffb199 0%, #ff0844 100%);'
        );
    });
});
