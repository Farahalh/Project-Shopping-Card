import Homepage from './homepage';
import Header from './Header';


export default function Root() {
return (
        <>
            <div id='root'>
                <Header />
                    <Homepage />
            </div>
        </>
    );
}
