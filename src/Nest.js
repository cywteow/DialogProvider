import Nested from './Nested'
import Content from './Content';

function Nest(){
    console.log("this is nest render");
    return (
        <div>
            This is Nest
            <Nested />
            <Content />
        </div>
    )
}

export default Nest