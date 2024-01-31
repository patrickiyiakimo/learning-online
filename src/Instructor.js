import svg from "./images/undraw_add_information_j2wg.svg"


const Instructor = () => {
    
    return (
        <div className="instructor">
            <img src={svg} />
                <div className="instructor-courses">
                    <h1>Become <span>An Instructor</span> of Our Platform</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab rerum similique eos est eum dolore esse aut quas ipsam, mollitia architecto? Ut dolore ea quidem repellat nisi doloremque dicta placeat quod ipsa deleniti! Reprehenderit, ab.</p>
                    <button>Start Teaching</button>
                </div>
        </div>
    );
}
 
export default Instructor;