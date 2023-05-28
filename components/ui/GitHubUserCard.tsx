import { IonAvatar, IonIcon, IonItem, IonLabel, IonList, IonText } from '@ionic/react';
import { GitHubUser } from '../../services/GiutHubService';
import Image from 'next/image';
import { convertGithubDate } from '../../utils/utils';
import { location, link, logoTwitter, newspaper } from 'ionicons/icons';
import { is } from 'date-fns/locale';
import GithubUserCardSkeleton from './GithubUserCardSkeleton';

const GitHubUserCard = (params: { user: GitHubUser; isLoading: boolean }) => {
  const { user, isLoading } = params;
  const formatedUserJoinedDate = convertGithubDate(user?.created_at);

  const informations: Array<{ title: string; value: number }> = [
    { title: 'Repos', value: user.public_repos },
    { title: 'Followers', value: user.followers },
    { title: 'Following', value: user.following },
  ];

  const links: Array<{ icon: string; value: string }> = [
    { icon: location, value: user.location },
    { icon: link, value: user.html_url },
    { icon: logoTwitter, value: user.twitter_username },
    { icon: newspaper, value: user.company },
  ];

  return (
    <div className="rounded-xl flex flex-col justify-center py-4 px-8 bg-gray-800 gap-6">
      {isLoading && <GithubUserCardSkeleton />}
      {user && !isLoading && (
        <>
          <div className="flex w-full items-center gap-8">
            <Image
              width="80"
              height="80"
              className="rounded-full"
              src={user.avatar_url}
              alt={user.name ? user.name : user.login}
            />
            <div className="flex flex-col gap-1">
              <IonText color={'dark'}>
                <h1 className="text-sm p-0 m-0">{user?.name}</h1>
              </IonText>
              <IonText color={'primary'}>
                <h2 className="text-sm p-0 m-0 font-mono font-extralight">{user?.login}</h2>
              </IonText>
              <IonText color={'dark'}>
                <h2 className="text-sm p-0 m-0 font-mono font-extralight">
                  Joined {formatedUserJoinedDate}
                </h2>
              </IonText>
            </div>
          </div>

          <IonText color={'dark'}>
            <p className="font-mono font-extralight w-full">
              {user?.bio ? user.bio : 'No bio provided'}
            </p>
          </IonText>

          <div className="px-8 py-4 flex justify-evenly rounded-xl bg-gray-900">
            {informations.map((info, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <IonText color={'dark'}>
                  <h2 className="text-sm p-0 m-0 font-mono font-light text-gray-200">
                    {info.title}
                  </h2>
                </IonText>
                <IonText color={'dark'}>
                  <h2 className="text-sm p-0 m-0 font-mono font-bold">{info.value}</h2>
                </IonText>
              </div>
            ))}
          </div>

          <ul className="gap-3 flex flex-col">
            {links.map((link, index) => (
              <li
                key={index}
                className={`flex gap-3 items-center ${
                  link?.value ? 'text-white' : 'text-gray-500'
                }`}
              >
                <IonIcon className="text-2xl" icon={link.icon} />
                <span className="text-sm font-thin">{link?.value || 'Not available'}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default GitHubUserCard;
