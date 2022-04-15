
// css
import "./agenda.css";

function Agenda() {
    return (
        <div className='agenda'>
            <h3>Agenda</h3>
            <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://calendar.google.com/calendar/embed?src=pauline.gane%40gmail.com&ctz=Europe%2FParis' />"}} />
        </div>
    )
 }
export default Agenda;