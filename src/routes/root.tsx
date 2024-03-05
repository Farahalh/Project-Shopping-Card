import { Button } from '@/components/ui/button';
import Homepage from './homepage';


export default function Root() {
return (
        <>
            <div id='detail'>
             Hello from root
<Homepage />

             <Button variant={"destructive"}>Hello</Button>
            </div>
        </>
    );
}
