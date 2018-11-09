# Picture_Poster

## usage
- ```git clone https://github.com/solareenlo/Picture_Poster.git```
- ```cd Picture_Poster```
- ```yarn install```
- ```cd ios```
- ```pod install```
- ```cd Picture_Poster```
- firebaseからGoogleService-Info.plistをダウンロードして、今いるフォルダに保存
- ```cd ../../```
- ```react-native run-ios```
- うまく動かない時は直ぐ下の節を参照のこと.

## react-native run-iosして上手く動かない時は
拡張子が.xcworkspaceのファイルを一度Xcodeで開いて、各種設定を行ってから、indexingを一度行ってから、次のコマンドをプロジェクトのフォルダ直下で実行.
```
rm -r ~/.rncache/ && rm -rf node_modules/ && yarn cache clean && yarn install && cd node_modules/react-native && scripts/ios-install-third-party.sh --host && cd third-party && cd glog-0.3.5 && ./configure --host arm-apple-darwin && cd ../../../../
```

## react-navite-firebaseを使うには
- `npm install --save react-native-firebase`を行う.
- firebaseからGoogleService-Info.plistをダウンロードしてきて、ios/[YOUR APP NAME]/GoogleService-Info.plistに移動する.
- XCodeでGoogleService-Info.plistをプロジェクトに追加して、Target Membershipのコンパスみたいな絵のところのチェックボタンにチェックを入れる
- ios/[YOUR APP NAME]/AppDelegate.mに、`#import <Firebase.h>`と`[FIRApp configure];`を所定の位置に書き込む.
- Cocoapodsをインストールする.
- pod initiを行う.
- Podfileに、`platform :ios, '9.0'`と`pod 'Firebase/Core', '~> 5.11.0'`を追記する.
- XCodeでios/[YOUR APP NAME].xcworkspaceを開いてみる.
- `react-native link react-native-firebase`を行う.

