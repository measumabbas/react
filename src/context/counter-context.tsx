import { createContext, ReactNode, useContext, useState } from "react";

type ContextType = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

const CounterContext = createContext<ContextType | undefined>(undefined);

const CounterContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [counter, setCounter] = useState(0);
  const data = {
    counter,
    setCounter,
  };
  return (
    <CounterContext.Provider value={data}>{children}</CounterContext.Provider>
  );
};

export const useCounter = ()=>{
    const context = useContext(CounterContext)
    if(!context){
        throw new Error('useCounter cannot be used outside CounterContextProvider')
    }
    else{
        return context
    }
}

export default CounterContextProvider