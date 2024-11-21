import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonIcon,
  IonButtons,
} from '@ionic/react';
import { arrowBackOutline, searchOutline, logoFacebook, logoInstagram } from 'ionicons/icons';
import { SiThreads } from 'react-icons/si'; // Using SiThreads for Threads icon
import './HelpCenter.css';
import logo from './Copy_of_Untitled-removebg-preview.png'; // Ensure this path matches your project's logo location

const HelpCenter: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="header">
          <IonButtons slot="start">
            <IonButton routerLink="/" fill="clear">
              <IonIcon icon={arrowBackOutline} />
            </IonButton>
          </IonButtons>
          <div className="header-title">
          <img src={logo} alt="Journey PH Logo" className="app-logo" />
          <h1 className="header-title">Journey PH</h1>   
       </div>
        </IonToolbar>
      </IonHeader>

      <IonContent className="help-center">
        <h2 className="title">HELP CENTER</h2>
        <p className="subtitle">How can we help you?</p>

        <div className="search-bar">
          <IonInput placeholder="Search questions, keywords and topics" className="search-input" />
          <IonButton className="search-button" fill="clear">
            <IonIcon icon={searchOutline} />
          </IonButton>
        </div>

        <p className="concerns-text">If you have any concerns and clarifications. Visit our platforms:</p>

        <div className="social-icons">
          <div className="social-icon">
            <IonIcon icon={logoFacebook} className="icon" />
            <span>JOURNEYPH</span>
          </div>
          <div className="social-icon">
            <SiThreads className="icon" />
            <span>@JOURNEY_PH</span>
          </div>
          <div className="social-icon">
            <IonIcon icon={logoInstagram} className="icon" />
            <span>@JOURNEY_PH</span>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HelpCenter;
