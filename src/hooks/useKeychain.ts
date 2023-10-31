import { useEffect, useState } from 'react';
import { getPasscode, getUserName } from 'utils/keychain';

export const useKeyChain = () => {
  const [savedUserName, setSavedUserName] = useState<string | null | undefined>();
  const [savedPasscode, setSavedPasscode] = useState<string | null | undefined>();

  useEffect(() => {
    const fetchKeyChainData = async () => {
      const username = await getUserName();
      setSavedUserName(username);
      const passcode = await getPasscode();
      setSavedPasscode(passcode);
    };

    fetchKeyChainData();
  }, []);
  return {
    savedUserName,
    savedPasscode,
  };
};
