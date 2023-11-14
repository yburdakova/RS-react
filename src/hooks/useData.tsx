import React, { useEffect, useState } from 'react'
import { chunkArray, fetchCharacters } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { CharacterProps } from '../constants/interfaces';

function useData() {
    const savedSearchRequest = localStorage.getItem('searchRequest');
    const savedLimitRequest = localStorage.getItem('selectedLimit');
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [searchValue, setSearchValue] = useState(savedSearchRequest || '');
    const [searchRequest, setSearchRequest] = useState(savedSearchRequest || '');
    const [isError, setIsError] = useState(false);
    const [selectedLimit, setSelectedLimit] = useState(savedLimitRequest || '10');
    const [initialLoad, setInitialLoad] = useState(true);
    const [infoData, setInfoData] = useState<CharacterProps[][]>([])

    useEffect(() => {  
        if (!initialLoad) {
            fetchResults(searchRequest);
        } else {
            setInitialLoad(false);
        }
    }, [initialLoad, searchRequest]);
    
    useEffect(() => {
        localStorage.setItem('selectedLimit', selectedLimit);
        if (selectedLimit !== savedLimitRequest) {
            fetchResults(searchRequest);
        }
    }, [selectedLimit, savedLimitRequest]);
    
    useEffect(() => {
        if (isError) {
            throw new Error('Test error');
        }
    }, [isError]);
    
    const errorCalling = () => {
        setIsError(true);
    };

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLimit(e.target.value);
    navigate('/');
    };
    
    const onSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSearchRequest(searchValue);
        navigate('/');
    };
    
    const fetchResults = (searchTerm: string) => {
        setLoading(true);
        localStorage.setItem('searchRequest', searchTerm);
        
        fetchCharacters(searchTerm)
            .then((results) => {
                const chunkedData = chunkArray(results, selectedLimit);
                setInfoData(chunkedData);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    };

    return {
        loading,
        searchValue,
        searchRequest,
        selectedLimit,
        infoData,
        errorCalling,
        onSearchChange,
        onSelectChange,
        onSearchSubmit,
    };


}

export default useData