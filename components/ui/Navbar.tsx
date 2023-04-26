import Image from 'next/image';
import NextLink from 'next/link';
import { Spacer, Text, Link } from '@nextui-org/react';

export const Navbar = () => {
  return (
    <div className="flex w-full flex-row justify-between items-center py-0 px-10 bg-gray-900 gap-3">
      <Image
        src="https://www.pngmart.com/files/2/Pokeball-Transparent-Background.png"
        alt="icono de la app"
        width={36}
        height={36}
      />

      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okedex
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favorites" passHref>
        <Link css={{ marginRight: '10px' }}>
          <Text color="white">Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
};
