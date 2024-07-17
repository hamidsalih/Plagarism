import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DocumentList } from "./document/DocumentList";
import { DocumentCreate } from "./document/DocumentCreate";
import { DocumentEdit } from "./document/DocumentEdit";
import { DocumentShow } from "./document/DocumentShow";
import { AnalysisResultList } from "./analysisResult/AnalysisResultList";
import { AnalysisResultCreate } from "./analysisResult/AnalysisResultCreate";
import { AnalysisResultEdit } from "./analysisResult/AnalysisResultEdit";
import { AnalysisResultShow } from "./analysisResult/AnalysisResultShow";
import { SimilarityCheckList } from "./similarityCheck/SimilarityCheckList";
import { SimilarityCheckCreate } from "./similarityCheck/SimilarityCheckCreate";
import { SimilarityCheckEdit } from "./similarityCheck/SimilarityCheckEdit";
import { SimilarityCheckShow } from "./similarityCheck/SimilarityCheckShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Plagiarism Detection System"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Document"
          list={DocumentList}
          edit={DocumentEdit}
          create={DocumentCreate}
          show={DocumentShow}
        />
        <Resource
          name="AnalysisResult"
          list={AnalysisResultList}
          edit={AnalysisResultEdit}
          create={AnalysisResultCreate}
          show={AnalysisResultShow}
        />
        <Resource
          name="SimilarityCheck"
          list={SimilarityCheckList}
          edit={SimilarityCheckEdit}
          create={SimilarityCheckCreate}
          show={SimilarityCheckShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
