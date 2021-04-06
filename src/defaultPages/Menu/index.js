
import React from 'react';
import {
    Container,
    Button,
} from './style'


class Interests extends React.PureComponent {

    redirectInstagram = () => {
        window.open('https://www.instagram.com/inspiremekorea/');
    }
    redirectShop = () => {
        window.open('https://www.inspiremekorea.com/');
    }
    redirectBlog = () => {
        window.open('https://www.inspiremekorea.com/blogs/inspire-me-blog');
    }


    render() {
        const { history } = this.props;

        return (
            <Container>
                <Button primary a onClick={this.redirectShop}>SHOP</Button>
                <Button primary b onClick={this.redirectBlog}>BLOG</Button>
                <Button primary c onClick={this.redirectInstagram} >INSTAGRAM</Button>
            </Container>
        )
    }
}

export default Interests;