import { useEffect, useMemo, useState } from 'react';
import { buildDiceBearAvatarUrl } from '../data/avatar.js';

const fallbackAvatar = {
  face: 'sonrisa',
  color: 'coral',
  accessory: 'brujula',
};

const faceSymbols = {
  sonrisa: ':)',
  calma: ':D',
  valentia: '^_^',
};

const accessorySymbols = {
  brujula: 'B',
  corona: '*',
  gafas: 'o-o',
};

function LocalAvatarPreview({ avatar = fallbackAvatar, size }) {
  const safeAvatar = {
    ...fallbackAvatar,
    ...(avatar || {}),
  };

  return (
    <div className={`avatar-preview avatar-preview--${size} avatar-preview--${safeAvatar.color}`}>
      <div className="avatar-preview__hair" />
      <div className="avatar-preview__face">{faceSymbols[safeAvatar.face]}</div>
      <div className="avatar-preview__accessory">{accessorySymbols[safeAvatar.accessory]}</div>
    </div>
  );
}

function AvatarPreview({
  avatar,
  diceBearConfig,
  size = 'large',
  frameColor,
  onImageError,
}) {
  const avatarUrl = useMemo(
    () => (diceBearConfig ? buildDiceBearAvatarUrl(diceBearConfig) : ''),
    [diceBearConfig],
  );
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageFailed(false);
  }, [avatarUrl]);

  if (diceBearConfig && !imageFailed) {
    return (
      <div
        className={[
          'avatar-preview',
          'avatar-preview--image',
          `avatar-preview--${size}`,
          frameColor ? 'avatar-preview--framed' : '',
        ]
          .filter(Boolean)
          .join(' ')}
        style={frameColor ? { '--avatar-frame-color': frameColor } : undefined}
      >
        <img
          src={avatarUrl}
          alt="Avatar del alumno"
          onError={() => {
            setImageFailed(true);
            onImageError?.();
          }}
        />
      </div>
    );
  }

  return <LocalAvatarPreview avatar={avatar} size={size} />;
}

export default AvatarPreview;
