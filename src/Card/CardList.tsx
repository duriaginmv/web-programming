import { Asteroid, Card } from './Card';
import React, { useReducer } from 'react';
import { PageContext } from '../App';
import { PageReducer } from '../Reducers/Reducers';
import { ViewBar } from '../../src/Other/ToolBar';
import { InitPageState } from '../App';

type List = {
    list: Asteroid[];
};

export const CardList = (props: List) => {
    const [state, dispatch] = useReducer(
        PageReducer,
        InitPageState
    );

    return (
        <PageContext.Provider
            value={{
                state: state,
                dispatch: dispatch,
            }}
        >
            <ViewBar />
            {!state.show
                ? props.list.map(
                      (item: Asteroid) => (
                          <Card
                              name={
                                  item.name
                              }
                              date={
                                  item.date
                              }
                              distance={
                                  item.distance
                              }
                              size={
                                  item.size
                              }
                              grade={
                                  item.grade
                              }
                          />
                      )
                  )
                : props.list.map(
                      (item: Asteroid) => (
                          <>
                              {item.grade ===
                              'опасен' ? (
                                  <Card
                                      name={
                                          item.name
                                      }
                                      date={
                                          item.date
                                      }
                                      distance={
                                          item.distance
                                      }
                                      size={
                                          item.size
                                      }
                                      grade={
                                          item.grade
                                      }
                                  />
                              ) : (
                                  ''
                              )}
                          </>
                      )
                  )}
        </PageContext.Provider>
    );
};
