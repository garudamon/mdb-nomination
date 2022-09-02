import create from "zustand"
import { persist } from 'zustand/middleware'
import { AppState } from './models'

const useStore = create<AppState>()(
    persist(
        (set, get) => ({
            count: 0,
            setCount: () => set((state) => ({ count: state.count + 1 }))
        }),
        {
            name: 'mdb-nomination',
        }
    )
)

export { useStore }