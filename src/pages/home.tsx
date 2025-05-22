import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import Dashboard from "./dashboard";
import { useCounter } from "../context/counter-context";
function Home() {
  const {setCounter, counter} = useCounter()
  return (
    <div className="mx-8">
      <Button onClick={()=>{
        const newCount = counter+1
        setCounter(newCount)
      }}>+Counter</Button>
    </div>
  );
}

export default Home;
