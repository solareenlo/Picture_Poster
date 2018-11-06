# Picture_Poster

## react-native run-iosで動かない時は
```
cd node_modules/react-native && scripts/ios-install-third-party.sh --host && cd third-party && cd glog-0.3.5 && ./configure && cd ../../../../
```
を試してみる.

## react-firebaseを使うには
- `npm install --save react-native-firebase`を行う.
- firebaseからGoogleService-Info.plistをダウンロードしてきて、ios/[YOUR APP NAME]/GoogleService-Info.plistに移動する.
- XCodeでGoogleService-Info.plistをプロジェクトに追加して、Target Membershipのコンパスみたいな絵のところのチェックボタンにチェックを入れる
- ios/[YOUR APP NAME]/AppDelegate.mに、`#import <Firebase.h>`と`[FIRApp configure];`を所定の位置に書き込む.
- Cocoapodsをインストールする.
- pod initiを行う.
- Podfileに、`platform :ios, '9.0'`と`pod 'Firebase/Core', '~> 5.11.0'`を追記する.
- XCodeでios/[YOUR APP NAME].xcworkspaceを開いてみる.
- `react-native link react-native-firebase`を行う.
