import Image from 'next/image';
import NextLink from 'next/link';
import { Link, Text } from '@nextui-org/react';

const Navbar = () => {
  return (
    <div className="flex w-full flex-row justify-between items-center py-0 px-10 bg-gray-900">
      <div className="flex flex-row justify-center items-center gap-3">
        <Image
          src={'https://www.pngmart.com/files/2/Pokeball-Transparent-Background.png'}
          alt="icono de la app"
          width={34}
          height={34}
        />
        <NextLink href="/" passHref>
          <Link>
            <Text className="text-white" h2>
              P
            </Text>
            <Text className="text-white" h3>
              okedex
            </Text>
          </Link>
        </NextLink>
      </div>
      <div className="flex flex-row items-center">
        <NextLink href="/favorites" passHref>
          <Link>
            <Text className="text-white" h5>
              Favoritos
            </Text>
          </Link>
        </NextLink>
      </div>
    </div>
  );
};

export default Navbar;
