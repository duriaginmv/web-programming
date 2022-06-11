import {
    AsteroidsReducer,
    PageReducer,
} from './Reducers';
import {
    InitAsteroidsState,
    InitPageState,
} from '../App';
import { Asteroid } from '../Card/Card';

const InitAsteroid: Asteroid = {
    name: '',
    date: '',
    distance: 0,
    size: 0,
    grade: 'не опасен',
};

describe('AsteroidsReducer', () => {
    test('case "Arr": change arr (add InitAsteroid)', () => {
        const result = AsteroidsReducer(
            InitAsteroidsState,
            {
                type: 'Arr',
                payload: {
                    ...InitAsteroidsState,
                    arr: [InitAsteroid],
                },
            }
        );
        expect(result).toBeDefined();
        expect(result).not.toEqual([]);
        expect(result.arr).toEqual([
            InitAsteroid,
        ]);
    });

    test('case "Destroy": change destroy (add InitAsteroid)', () => {
        const result = AsteroidsReducer(
            InitAsteroidsState,
            {
                type: 'Destroy',
                payload: {
                    ...InitAsteroidsState,
                    destroy: [InitAsteroid],
                },
            }
        );
        expect(result).toBeDefined();
        expect(result).not.toEqual([]);
        expect(result.destroy).toEqual([
            InitAsteroid,
        ]);
    });

    test('default: throw Error', () => {
        expect(() =>
            AsteroidsReducer(
                InitAsteroidsState,
                {
                    type: '',
                    payload:
                        InitAsteroidsState,
                }
            )
        ).toThrow();
    });
});

describe('PageReducer', () => {
    test('case "Show": change show (from false to true)', () => {
        const result = PageReducer(
            InitPageState,
            {
                type: 'Show',
                payload: {
                    ...InitPageState,
                    show: true,
                },
            }
        );
        expect(result).toBeDefined();
        expect(result).not.toEqual(false);
        expect(result.show).toEqual(true);
    });

    test('case "Units": change units (from 0 to 1)', () => {
        const result = PageReducer(
            InitPageState,
            {
                type: 'Units',
                payload: {
                    ...InitPageState,
                    units: 1,
                },
            }
        );
        expect(result).toBeDefined();
        expect(result).not.toEqual(0);
        expect(result.units).toEqual(1);
    });

    test('default: throw Error', () => {
        expect(() =>
            PageReducer(InitPageState, {
                type: '',
                payload: InitPageState,
            })
        ).toThrow();
    });
});
