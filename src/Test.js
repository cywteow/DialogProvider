import Tested from './Tested'
import Content from './Content';

function Test(){
    console.log("this is test render");
    return (
        <div>
            This is test
            <Tested />
            <Content />
        </div>
    )
}

export default Test