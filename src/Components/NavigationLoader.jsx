// import { useNavigation } from "react-router-dom";
// import Loading from "./Loading";

import React from "react";
import { useNavigation } from "react-router";
import Loading from "./Loading";

// export default function NavigationLoader() {
//     const navigation = useNavigation();
//     const isLoading = navigation.state === "loading";

//     return isLoading ? <Loading></Loading> : null;
// }
export default function NavigationLoader() {
    const navigation = useNavigation();
    const [initialLoad, setInitialLoad] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => setInitialLoad(false), 500);
        return () => clearTimeout(timer);
    }, []);

    const isLoading = navigation.state === "loading" || initialLoad;

    return isLoading ?
        <div className='fixed inset-0 bg-white text-black/90 flex justify-center items-center z-50'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex items-center gap-2'>
                L
                <img
                    className='animate-spin w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'
                    src="/logo.png"
                    alt="logospin"
                />
                OADING
            </h1>
        </div>
        : null;
}

