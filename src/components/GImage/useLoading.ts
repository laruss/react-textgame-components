import { useEffect, useState } from 'react';

const useLoading = ({ src }: { src?: string }) => {
    const [imgSrc, setImgSrc] = useState<string>(src ?? '');
    const [isError, setIsError] = useState<boolean>(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (src) {
            setLoaded(false);
            const img = new Image();
            img.src = src;
            img.onload = () => {
                setImgSrc(src);
                img.complete && img.naturalHeight !== 0 && setLoaded(true);
            };
            img.onerror = () => {
                setIsError(true);
                setLoaded(true);
            };
        }
    }, [src]);

    return {
        imgSrc,
        isError,
        loaded,
    };
};

export default useLoading;
