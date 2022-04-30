import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-blue-500">Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" className="text-blue-500">
              Blank
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <main className="bg-gray-200 h-full">
          <h1 className="text-green-500 font-bold text-2xl">Hello World</h1>
        </main>
      </IonContent>
    </IonPage>
  );
};

export default Home;
