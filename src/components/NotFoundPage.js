import React from 'react';
import Header from './Header';

const NotFoundPage = () => {
    return (
        <div>
            <Header>
                <section>
                    <div className="error-block">
                        <div className="error-block_text">
                            <p>404</p>
                        </div>
                        <div className="vertical-line"></div>
                        <div className="error-block_description">
                            <img src="img/404.png" alt="error page"/>
                            <p className="upper-text">oops!!!</p>
                            <p>The page you are looking for cannot found</p>
                            <a className="btn-style" href="/">back to home page</a>
                        </div>
                    </div>
                </section>
            </Header>
        </div>
    );
};

export default NotFoundPage;