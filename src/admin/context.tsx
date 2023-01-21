import React, { FC, ReactNode, useCallback, useMemo } from 'react'
// import { ThemeProvider } from 'next-themes'

export interface State {
  displaySidebar: boolean
  sidebarView: string
  dataId: number | null
}

const initialState = {
  displaySidebar: false,
  sidebarView: 'BLANK_VIEW',
  dataId: null
}

type Action =
  | {
      type: 'OPEN_SIDEBAR'
    }
  | {
      type: 'CLOSE_SIDEBAR'
    }
  | {
      type: 'SET_SIDEBAR_VIEW'
      view: SIDEBAR_VIEWS
      dataId: number
    }

type SIDEBAR_VIEWS = 
    "BLANK_VIEW" 
    | 
    // for news 
    'NEWS_DETAIL' 
    | 
    'POST_NEWS' 
    | 
    'UPDATE_NEWS'
    |
    'UPDATE_NEWS_STATUS'



export const UIContext = React.createContext<State | any>(initialState)

UIContext.displayName = 'UIContext'


function uiReducer(state: State, action: Action) {
    switch (action.type) {
        case 'OPEN_SIDEBAR': {
            return {
                ...state,
                displaySidebar: true,
            }
        }
        case 'CLOSE_SIDEBAR': {
            return {
                ...state,
                displaySidebar: false,
            }
        }
        case 'SET_SIDEBAR_VIEW': {
            return {
                ...state,
                sidebarView: action.view,
                dataId: action.dataId
            }
        }
    }
}

export const UIProvider: FC<{ children?: ReactNode }> = (props) => {
    const [state, dispatch] = React.useReducer(uiReducer, initialState)

    const openSidebar = useCallback(
        () => dispatch({ type: 'OPEN_SIDEBAR' }),
        [dispatch]
    )
    const closeSidebar = useCallback(
        () => dispatch({ type: 'CLOSE_SIDEBAR' }),
        [dispatch]
    )
    const toggleSidebar = useCallback(
        () =>
        state.displaySidebar
            ? dispatch({ type: 'CLOSE_SIDEBAR' })
            : dispatch({ type: 'OPEN_SIDEBAR' }),
        [dispatch, state.displaySidebar]
    )
    const closeSidebarIfPresent = useCallback(
        () => state.displaySidebar && dispatch({ type: 'CLOSE_SIDEBAR' }),
        [dispatch, state.displaySidebar]
    )

    const setSidebarView = useCallback(
        (view: SIDEBAR_VIEWS, dataId: number) => dispatch({ type: 'SET_SIDEBAR_VIEW', view, dataId }),
        [dispatch]
    )

    const value = useMemo(
        () => ({
            ...state,
            openSidebar,
            closeSidebar,
            toggleSidebar,
            closeSidebarIfPresent,
            setSidebarView,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [state]
    )

    return <UIContext.Provider value={value} {...props} />
}

export const useUI = () => {
    const context = React.useContext(UIContext)

    if (context === undefined) {
        throw new Error(`useUI must be used within a UIProvider`)
    }

    return context
}

export const ManagedUIContext: FC<{ children?: ReactNode }> = ({ children }) => (
    <UIProvider>
        {children}
    </UIProvider>
)
