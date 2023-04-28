import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>accept out terms and condition</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste natus, est a architecto itaque fugit ut maxime quod eaque cumque consectetur aspernatur voluptate totam cupiditate et laboriosam, odit consequuntur placeat voluptas distinctio modi animi assumenda harum libero! Aliquid explicabo ea laudantium odit repellendus, inventore iste sapiente aperiam, similique dolore dolor?</p>

            <p>go back to <Link to={'/register'}>Register</Link></p>
        </div>
        
    );
};

export default Terms;