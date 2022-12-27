// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Auth from './pages/Auth';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Auth />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import Auth from './pages/Auth';
import Account from './pages/Account';
import { View } from 'react-native';
import { Session } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';
import { useState, useEffect } from 'react';
import { supabase } from './supabase-helper';

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  // console.log(supabase);
  return (
    <View>
      {session && session.user ? (
        <Account key={session.user.id} session={session} />
      ) : (
        <Auth />
      )}
    </View>
  );
}
