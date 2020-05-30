import React, { FC } from 'react';
//import config from 'app/core/config';
import { Icon, IconName } from '@grafana/ui';

export interface FooterLink {
  text: string;
  icon?: string;
  url?: string;
  target?: string;
}

export let getFooterLinks = (): FooterLink[] => {
  return [
    {
      text: 'www.somone.fr',
      icon: 'document-info',
      url: 'https://somone.fr',
      target: '_blank',
    },
  ];
};

export let getVersionLinks = (): FooterLink[] => {
  //const { licenseInfo } = config;
  const links: FooterLink[] = [];
  //const stateInfo = licenseInfo.stateInfo ? ` (${licenseInfo.stateInfo})` : '';

  //links.push({ text: `${'somone.fr'}`, url: 'somone.fr' });
  links.push({ text: `v${'1.0'}` });

  return links;
};

export function setFooterLinksFn(fn: typeof getFooterLinks) {
  getFooterLinks = fn;
}

export function setVersionLinkFn(fn: typeof getFooterLinks) {
  getVersionLinks = fn;
}

export const Footer: FC = React.memo(() => {
  const links = getFooterLinks().concat(getVersionLinks());

  return (
    <footer className="footer">
      <div className="text-center">
        <ul>
          {links.map(link => (
            <li key={link.text}>
              <a href={link.url} target={link.target} rel="noopener">
                <Icon name={link.icon as IconName} /> {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
});
