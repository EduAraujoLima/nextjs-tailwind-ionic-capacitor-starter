import { IonIcon, IonSearchbar, IonText } from '@ionic/react';
import React, { Suspense, use, useEffect, useState } from 'react';
import { moonOutline, sunnyOutline } from 'ionicons/icons';
import GitHubUserCard from '../ui/GitHubUserCard';
import { GitHubUser, useUser } from '../../services/GiutHubService';
import { SubmitHandler, useForm } from 'react-hook-form';
import GithubUserCardSkeleton from '../ui/GithubUserCardSkeleton';

type Inputs = {
  username: string;
}

const Home = () => {
  const toggleDarkModeHandler = () => document.body.classList.toggle('dark');

  const [username, setUsername] = useState('eduaraujoLima');

  const { user, isLoading, isError } = useUser(username);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  const handleSearch = (username: string) => {
    setUsername(username);
  };

  const onSubmit: SubmitHandler<Inputs> = data => {
    handleSearch(data.username);
  };

  return (
    <div className="px-4 flex flex-col gap-2">
      <nav className="bg-transparent flex justify-between items-center pt-2">
        <IonText>
          <h1 className="text-lg p-0 m-0">devFinder</h1>
        </IonText>
        <button className="bg-transparent p-0 m-0 text-3xl" onClick={toggleDarkModeHandler}>
          <IonIcon slot="icon-only" icon={moonOutline} />
        </button>
      </nav>

      <form className="relative" onSubmit={handleSubmit(onSubmit)}>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Github username..."
          required
          {...register("username")}
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </form>

      {isLoading && <GithubUserCardSkeleton />}
      {user && <GitHubUserCard user={user} isLoading={isLoading}/>}

    </div>
  );
};

export default Home;
