
// css
import styled from 'styled-components';

function Agenda() {
    return (
        <AgendaStyle>
            <h3>Agenda</h3>
            <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://calendar.google.com/calendar/embed?src=chibienayme%40gmail.com&ctz=Europe%2FParis' />"}} />
    
        </AgendaStyle>
    )
 }
export default Agenda;

const AgendaStyle = styled.div`
	position: absolute;
    top: 1%;
    margin-left: 30%;
    border: 0;
`;