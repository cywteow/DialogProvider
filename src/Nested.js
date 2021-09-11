
import Content from './Content';

function Nested(){
    console.log('this is nested render');
    return (
        <div>
            This is Nested
            <Content />
        </div>
    )
}

export default Nested