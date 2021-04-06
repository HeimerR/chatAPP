import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import axios from 'axios'
import S3FileUpload from 'react-s3';

import {
    Container,
    Input,
    Button,
    ContentTitle,
    Title,
    Section,
    BarsMod,
    Logo,
    Box1,
    InputFile
} from './style'

/* s3 credential */
const config = {
    bucketName: 'inspire-pictures',
    dirName: 'profiles-pictures', /* optional */
    region: 'eu-west-2',
    accessKeyId: 'AKIA2RR6LYEUJNAEYWWX',
    
    secretAccessKey: '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'
}

class userDetails extends React.PureComponent {

    state = {

        // Initially, no file is selected
        selectedFile: null,
        localfile: null,
        awsUrl: null
    };

    // On file select (from the pop up)
    onFileChange = event => {

        // Update the state
        this.setState({
            selectedFile: event.target.files[0],
            localfile: URL.createObjectURL(event.target.files[0])
        });

    };

    redirectUserDetails = () => {
        const { history } = this.props;
        if (history) history.push('/finalsetup');
    }

    fileData = () => {

        if (this.state.selectedFile && !this.state.awsUrl) {
            return (
                <div style={{ textAlign: 'center' }}>
                    <br />
                    <h2 style={{ margin: 'auto' }}>CLICK TO CHANGE YOUR PHOTO</h2>
                </div>
            );
        } else {
            return (
                <div>
                </div>
            )
        }
    };

    handleSubmit() {
        const user = {
            uid: localStorage.getItem('nickname'),
            name: localStorage.getItem('fullname'),
            avatar: localStorage.getItem('avatar-url')
        }
        axios({
            method: 'post',
            url: 'https://api-us.cometchat.io/v2.0/users',
            headers: {
                appId: '312030d2caeb5be',
                apiKey: 'd0c4b78ff160b344214eecab172da40e1e24d4c2'
            },
            data: user
        }).then(res => {
            console.log("This is the response --> ", res)
            this.redirectUserDetails()
        }).catch(err => {
            if (err.response.status === 400) {
                alert("The Username has already been taken")
            }
        })
    }

    upload = () => {
        S3FileUpload.uploadFile(this.state.selectedFile, config)
            .then((data) => {
                localStorage.setItem('avatar-url', data.location)
                this.setState({ awsUrl: data.location })
                this.handleSubmit()
            })
            .catch((err) => {
                alert(err)
            })
    }

    render() {

        return (
            <Container>
                <Section>
                    <Title value='<'>{'<'}</Title>
                    <div></div>
                    <BarsMod icon={faBars} size="4x" style={{ cursor: 'pointer', marginTop: '0.5em' }} />
                    <BarsMod icon={faBars} size="2x" style={{ cursor: 'pointer', marginTop: '0.5em' }} />
                </Section>
                <Logo src="https://i.imgur.com/wHWOIL2.png" />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ display: 'block', textAlign: 'center' }}>
                        <ContentTitle>MY PROFILE</ContentTitle>
                        <Box1>
                            <InputFile style={{ background: this.state.localfile ? `url(${this.state.localfile})` : 'url("https://i.imgur.com/uaALhwB.png")' }}>
                                <input style={{ display: 'none' }} type="file" onChange={this.onFileChange} />
                            </InputFile>
                            {this.fileData()}
                        </Box1>
                        <Button type="submit" primary onClick={this.upload}>UPLOAD!</Button>
                    </div>
                </div>
            </Container>
        )
    }
}

export default userDetails;