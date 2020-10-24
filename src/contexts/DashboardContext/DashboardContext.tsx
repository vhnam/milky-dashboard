import {createContext} from 'react';

interface DashboardContextProps {
  onOpenSidebar: () => void;
  onCloseSidebar: () => void;
}

export const DashboardContext = createContext<DashboardContextProps>({} as any);
