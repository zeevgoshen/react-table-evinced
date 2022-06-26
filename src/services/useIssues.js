import { APIURL } from "../constants/strings";
import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export function useIssues() {
    const [ issues, setIssues ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ errMessage, setErrMessage ] = useState('');



    const loadIssues = async () => {
        console.log('loadIssues')
        await axios
          .get(APIURL)
          .then((response) => setIssues(response.data))
          .catch((err) => console.log(err));
      };

      
    useEffect(() => {
      setIsLoading(true);
      // Calls API to get list of issues


      loadIssues().then((response) => {
        console.log('loaded issues');
        setIssues(response.data.issues);
        setIsLoading(false);
        setErrMessage('');
      }).catch((e) => {
        setErrMessage(e.message);
        setIsLoading(false);
      });
    }, []);

    return [ issues, isLoading, errMessage, setIssues ];
  }