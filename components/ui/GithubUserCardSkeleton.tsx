import {
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSkeletonText,
  IonText,
  IonThumbnail,
} from '@ionic/react';

const GithubUserCardSkeleton = () => {
  return (
    <>
      <div className="flex w-full items-center gap-8">
        <IonThumbnail>
          <IonSkeletonText animated />
        </IonThumbnail>
        <div className="flex flex-col gap-1 flex-1">
          <IonSkeletonText animated style={{ width: '100%' }} />
          <IonSkeletonText animated style={{ width: '100%' }} />
          <IonSkeletonText animated style={{ width: '100%' }} />
        </div>
      </div>

      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="flex flex-col items-center gap-2">
          <IonSkeletonText animated style={{ width: '100%' }} />
        </div>
      ))}

      <ul className="gap-3 flex flex-col">
        {Array.from({ length: 4 }).map((_, index) => (
          <li key={index} className={`flex gap-3 items-center text-gray-500`}>
            <IonSkeletonText animated style={{ width: '100%' }} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default GithubUserCardSkeleton;
