import Content from './Content';

function Tested(){
    console.log('this is Tested render');
    return (
        <div>
            This is Tested
            <Content/>
        </div>
    )
}

export default Tested