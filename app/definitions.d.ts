type RequestStatus = 'idle' | 'failed' | 'success' | 'pending';

interface INavigationProps {
  navigation?: {
    goBack: () => void;
    replace: (routeName: string, params: any) => void;
    push: (routeName: string, params?: any) => void;
    getParam: (paramName: string, defaultValue?: any) => any;
    navigate: (routeName: string, params?: any) => void;
    dispatch: (action: any) => void;
    reset: (params: { index: number; routes: { name: string }[] }) => void;
    state: {
      routeName: string;
      key: string;
      params: {
        [prop: string]: any;
      };
    };
    addListener: (eventType: string, cb: (e: any) => any) => void;
  };
  route?: {
    params: any;
  };
}
