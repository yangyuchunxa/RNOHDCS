import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';
import {TextInputMask, MaskService} from 'react-native-masked-text';

export const MaskedTextDemo2 = () => {
  interface Imask {
    value: string;
    raw: string | undefined;
  }
  const [mask, setMask] = useState({
    code: '',
  });
  const [maskcpf, setMaskcpf] = useState({
    cpf: '',
  });
  const [maskoptions, setMaskoptions] = useState({
    datetime1: '',
    datetime2: '',
  });
  const [maskonChangeText, setMaskonChangeText] = useState({
    onChangeText1: '',
    onChangeText2: '',
  });
  const [maskcheckText, setMaskcheckText] = useState({
    checkText1: '',
    checkText2: '',
  });
  const [maskrefInput, setMaskrefInput] = useState({
    refInput1: '',
    refInput2: '',
  });
  const [maskcustomTextInput, setMaskcustomTextInput] = useState({
    customTextInput1: '',
    customTextInput2: '',
  });
  const [maskcustomTextInputProps, setMaskcustomTextInputProps] = useState({
    customTextInputProps1: '',
    customTextInputProps2: '',
  });
  const [maskincludeRawValueInChangeText, setMaskincludeRawValueInChangeText] =
    useState({
      includeRawValueInChangeText1: '',
      includeRawValueInChangeText2: '',
    });

  const [valid1, setValid1] = useState<Imask>({
    value: '',
    raw: '',
  });
  const [valid2, setValid2] = useState<Imask>({
    value: '',
    raw: '',
  });
  const [valid3, setValid3] = useState<Imask>({
    value: '',
    raw: '',
  });
  const [valid4, setValid4] = useState<Imask>({
    value: '',
    raw: '',
  });
  const [valid5, setValid5] = useState<Imask>({
    value: '',
    raw: '',
  });
  const [valid6, setValid6] = useState<Imask>({
    value: '',
    raw: '',
  });
  const [valid7, setValid7] = useState<Imask>({
    value: '',
    raw: '',
  });
  const [valid8, setValid8] = useState<Imask>({
    value: '',
    raw: '',
  });
  const [valid9, setValid9] = useState<Imask>({
    value: '',
    raw: '',
  });
  const [valid10, setValid10] = useState<Imask>({
    value: '',
    raw: '',
  });
  const [valid11, setValid11] = useState<Imask>({
    value: '',
    raw: '',
  });
  const [maskphone, setMaskphone] = useState({
    phoneBR: '',
    phoneBRWithoutDDD: '',
    phoneBRWithCustomDDD: '',
    international: '',
  });
  const [maskcpfs, setMaskcpfs] = useState({
    cpf: '',
  });
  const [maskcnpj, setMaskcnpj] = useState({
    cnpj: '',
  });
  const [maskcard, setMaskcard] = useState({
    creditcard: '',
    creditcardissuer: '',
    creditcarddiners: '',
  });
  const [maskcustom, setMaskcustom] = useState({
    custom1: '',
    custom2: '',
    custom3: '',
  });
  const [maskdatatime, setMaskdatatime] = useState({
    datetime1: '',
    datetime2: '',
    datetime3: '',
    datetime4: '',
    datetime5: '',
    datetime6: '',
    datetime7: '',
  });
  const [maskmoney, setMaskmoney] = useState({
    advanced: '',
  });
  const [masknumber, setMasknumber] = useState({
    numbers: '',
  });
  const [maskzipcode, setMaskzipcode] = useState({
    code: '',
  });
  const [maskoption, setMaskoption] = useState({
    advanced1: '',
    advanced2: '',
    advanced3: '',
    advanced4: '',
    advanced5: '',
    advanced6: '',
    advanced7: '',
    advanced8: '',
    advanced9: '',
    advanced10: '',
    advanced11: '',
    advanced12: '',
    advanced13: '',
    advanced14: '',
    advanced15: '',
    advanced16: '',
    advanced17: '',
  });

  const divRef1 = useRef();
  const divRef2 = useRef();
  const divRef3 = useRef();
  const divRef4 = useRef();
  const divRef5 = useRef();
  const divRef6 = useRef();
  const divRef7 = useRef();
  const divRef8 = useRef();
  const divRef9 = useRef();
  const divRef10 = useRef();
  const divRef11 = useRef();
  const divRef12 = useRef();
  const divRef13 = useRef();
  const divRef14 = useRef();

  const [maskto, setMaskto] = useState<Imask>({
    value: '',
    raw: '',
  });
  const [masktoRow, setMasktoRow] = useState<Imask>({
    value: '',
    raw: '',
  });
  const [maskgetMask, setMaskgetMask] = useState<Imask>({
    value: '',
    raw: '',
  });

  let refinput: any;
  let bol: boolean;
  let str: any;

  return (
    <ScrollView>
      <Tester style={styles.container}>
        <TestSuite name="type">
          <TestCase
            tags={['C_API']}
            itShould="type = zipcode(掩码格式为99999-999)">
            <View style={{flexDirection: 'column'}}>
              <View style={styles.container}>
                <Text>ZipCode</Text>
                <TextInputMask
                  type={'zip-code'}
                  value={mask.code}
                  onChangeText={text => {
                    setMask({
                      code: text,
                    });
                  }}
                  style={styles.textInputStype}
                />
              </View>
            </View>
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="type = cpf(掩码格式为999.999.999-99)">
            <View style={styles.container}>
              <Text>CPF</Text>
              <TextInputMask
                type={'cpf'}
                value={maskcpf.cpf}
                onChangeText={text => {
                  setMaskcpf({
                    cpf: text,
                  });
                }}
                style={styles.textInputStype}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="options">
          <TestCase
            tags={['C_API']}
            itShould="options={{format: 'YYYY/MM/DD',}}(，掩码格式为YYYY/MM/DD)">
            <View style={styles.container}>
              <Text>Datetime</Text>
              <TextInputMask
                type={'datetime'}
                options={{
                  format: 'YYYY/MM/DD',
                }}
                value={maskoptions.datetime1}
                onChangeText={text => {
                  setMaskoptions({
                    ...maskoptions,
                    datetime1: text,
                  });
                }}
                style={styles.textInputStype}
              />
            </View>
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="options={{format: 'DD/MM/YYYY HH:mm:ss',}}，(判断掩码格式为DD/MM/YYYY HH:mm:ss)">
            <View style={styles.container}>
              <Text>Datetime</Text>
              <TextInputMask
                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY HH:mm:ss',
                }}
                value={maskoptions.datetime2}
                onChangeText={text => {
                  setMaskoptions({
                    ...maskoptions,
                    datetime2: text,
                  });
                }}
                style={styles.textInputStype}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="onChangeText">
          <TestCase
            tags={['C_API']}
            itShould="onChangeText，(无法输入生成掩码)">
            <View style={styles.container}>
              <TextInputMask
                type={'zip-code'}
                value={maskonChangeText.onChangeText1}
                style={styles.textInputStype}
              />
            </View>
          </TestCase>
          <TestCase tags={['C_API']} itShould="onChangeText(在输入框生成掩码)">
            <View style={styles.container}>
              <Text>{`${maskonChangeText.onChangeText2}`}</Text>
              <TextInputMask
                type={'zip-code'}
                value={maskonChangeText.onChangeText2}
                onChangeText={text => {
                  setMaskonChangeText({
                    ...maskonChangeText,
                    onChangeText2: text,
                  });
                }}
                style={styles.textInputStype}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="checkText">
          <TestCase tags={['C_API']} itShould="checkText(正常生成掩码)">
            <View style={styles.container}>
              <TextInputMask
                type={'zip-code'}
                value={maskcheckText.checkText1}
                style={styles.textInputStype}
                onChangeText={text => {
                  setMaskcheckText({
                    ...maskcheckText,
                    checkText1: text,
                  });
                }}
              />
            </View>
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="checkText(阻止用户生成掩码，无法输入)">
            <View style={styles.container}>
              <TextInputMask
                type={'zip-code'}
                value={maskcheckText.checkText2}
                onChangeText={text => {
                  setMaskcheckText({
                    ...maskcheckText,
                    checkText2: text,
                  });
                }}
                checkText={(previous, next) => {
                  return next === 'your valid value or other boolean condition';
                }}
                style={styles.textInputStype}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="refInput">
          <TestCase
            tags={['C_API']}
            itShould="refInput={(e)=>{refinput=e._nativeTag}}(获取ref中的_nativeTag)"
            initialState={false}
            arrange={({setState, reset}) => (
              <View style={{flexDirection: 'column'}}>
                <View style={styles.container}>
                  <TextInputMask
                    refInput={e => {
                      refinput = e._nativeTag;
                    }}
                    type={'zip-code'}
                    value={maskrefInput.refInput1}
                    style={styles.textInputStype}
                    onChangeText={text => {
                      setMaskrefInput({
                        ...maskrefInput,
                        refInput1: text,
                      });
                    }}
                  />
                </View>
                <Text>{refinput}</Text>
                <Button
                  title="ZipCodeTest"
                  onPress={() => {
                    const regex = /^\d{5}-\d{3}$/;
                    if (regex.test(maskrefInput.refInput1)) {
                      setState(true);
                    }
                  }}
                />
                <Button title="reset" onPress={reset} />
              </View>
            )}
            assert={({state, expect}) => {
              expect(state).to.be.true;
            }}
          />
        </TestSuite>
        <TestSuite name="customTextInput">
          <TestCase
            tags={['C_API']}
            itShould="customTextInput = {TextInput}(自定义组件,字体为红色)">
            <View style={styles.container}>
              <TextInputMask
                type={'zip-code'}
                value={maskcustomTextInput.customTextInput1}
                style={{width: '100%', height: 50}}
                onChangeText={text => {
                  setMaskcustomTextInput({
                    ...maskcustomTextInput,
                    customTextInput1: text,
                  });
                }}
                customTextInput={TextInput}
                customTextInputProps={{style: {color: 'red'}}}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="customTextInputProps">
          <TestCase
            tags={['C_API']}
            itShould="customTextInputProps={{style: {backgroundColor: 'red'}}}(自定义组件的样式,背景红色)">
            <View style={styles.container}>
              <TextInputMask
                customTextInput={TextInput}
                customTextInputProps={{style: {backgroundColor: 'red'}}}
                type={'zip-code'}
                value={maskcustomTextInputProps.customTextInputProps1}
                style={styles.textInputStype}
                onChangeText={text => {
                  setMaskcustomTextInputProps({
                    ...maskcustomTextInputProps,
                    customTextInputProps1: text,
                  });
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="includeRawValueInChangeText">
          <TestCase
            tags={['C_API']}
            itShould="includeRawValueInChangeText=true,(获取掩码的初始值和更改之后的值)">
            <View style={styles.container}>
              <Text>zip-code</Text>
              <TextInputMask
                type={'zip-code'}
                value={valid1.value}
                includeRawValueInChangeText={true}
                onChangeText={(text, rawValue) => {
                  setValid1({
                    value: text,
                    raw: rawValue,
                  });
                }}
                ref={divRef1}
                style={styles.textInputStype}
              />
              <Text>value: {valid1.value}</Text>
              <Text>Raw: {valid1.raw}</Text>
            </View>
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="includeRawValueInChangeText=false,(获取不到初始值)">
            <View style={styles.container}>
              <Text>zip-code</Text>
              <TextInputMask
                type={'zip-code'}
                value={valid2.value}
                includeRawValueInChangeText={false}
                onChangeText={(text, rawValue) => {
                  setValid2({
                    value: text,
                    raw: rawValue,
                  });
                }}
                ref={divRef2}
                style={styles.textInputStype}
              />
              <Text>value: {valid2.value}</Text>
              <Text>Raw: {valid2.raw}</Text>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="type attribute">
          <TestCase
            tags={['C_API']}
            itShould="type = 'cel-phine'(掩码格式为默认项(99) 9999-9999 or (99) 99999-9999)">
            <View style={styles.container}>
              <Text>Cel Phone: BR</Text>
              <TextInputMask
                type={'cel-phone'}
                value={maskphone.phoneBR}
                onChangeText={text => {
                  setMaskphone({
                    ...maskphone,
                    phoneBR: text,
                  });
                }}
                style={styles.textInputStype}
              />
            </View>
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="type = 'cel-phine',(掩码格式为默认项9999-9999 or 99999-9999)">
            <View style={styles.container}>
              <Text>Cel Phone: BR without ddd</Text>
              <TextInputMask
                type={'cel-phone'}
                options={{
                  withDDD: false,
                }}
                value={maskphone.phoneBRWithoutDDD}
                onChangeText={text => {
                  setMaskphone({
                    ...maskphone,
                    phoneBRWithoutDDD: text,
                  });
                }}
                style={styles.textInputStype}
              />
            </View>
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="type = cpf，(掩码格式为999.999.999-99格式)">
            <View style={styles.container}>
              <Text>CPF</Text>
              <TextInputMask
                type={'cpf'}
                value={maskcpfs.cpf}
                onChangeText={text => {
                  setMaskcpfs({
                    cpf: text,
                  });
                }}
                style={styles.textInputStype}
              />
            </View>
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="type = cnpj，(掩码格式为99.999.999/9999-99)">
            <View style={styles.container}>
              <Text>CNPJ</Text>
              <TextInputMask
                type={'cnpj'}
                value={maskcnpj.cnpj}
                onChangeText={text => {
                  setMaskcnpj({
                    cnpj: text,
                  });
                }}
                style={styles.textInputStype}
              />
            </View>
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="type = 'credit-card'，(掩码格式为 9999 **** **** 9999)">
            <View style={styles.container}>
              <Text>Credit Card</Text>
              <TextInputMask
                type={'credit-card'}
                value={maskcard.creditcard}
                options={{
                  obfuscated: true,
                  issuer: 'visa-or-mastercard',
                }}
                onChangeText={text => {
                  setMaskcard({
                    ...maskcard,
                    creditcard: text,
                  });
                }}
                style={styles.textInputStype}
              />
            </View>
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="type = 'credit-card'，(掩码格式9999 999999 99999) ">
            <View style={styles.container}>
              <Text>CreditCard:issuer</Text>
              <TextInputMask
                type={'credit-card'}
                value={maskcard.creditcardissuer}
                options={{
                  issuer: 'amex',
                }}
                onChangeText={text => {
                  setMaskcard({
                    ...maskcard,
                    creditcardissuer: text,
                  });
                }}
                style={styles.textInputStype}
              />
            </View>
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="type = 'custom'，(掩码格式为999 AAA SSS ***)">
            <View style={styles.container}>
              <Text>Custom: 999 AAA SSS ***</Text>
              <TextInputMask
                type={'custom'}
                value={maskcustom.custom1}
                options={{
                  mask: '999 AAA SSS ***',
                }}
                onChangeText={text => {
                  setMaskcustom({
                    ...maskcustom,
                    custom1: text,
                  });
                }}
                style={styles.textInputStype}
              />
            </View>
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="type = 'datetime'，(掩码格式为YYYY/MM/DD)">
            <View style={styles.container}>
              <Text>Datetime</Text>
              <TextInputMask
                type={'datetime'}
                options={{
                  format: 'YYYY/MM/DD',
                }}
                value={maskdatatime.datetime1}
                onChangeText={text => {
                  setMaskdatatime({
                    ...maskdatatime,
                    datetime1: text,
                  });
                }}
                style={styles.textInputStype}
              />
            </View>
          </TestCase>
          <TestCase
            tags={['C_API']}
            itShould="type = 'datetime'，(掩码格式DD/MM/YYYY HH:mm:ss)">
            <View style={styles.container}>
              <Text>Datetime</Text>
              <TextInputMask
                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY HH:mm:ss',
                }}
                value={maskdatatime.datetime2}
                onChangeText={text => {
                  setMaskdatatime({
                    ...maskdatatime,
                    datetime2: text,
                  });
                }}
                style={styles.textInputStype}
              />
            </View>
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="type = 'money'，(掩码格式为money格式R$1,000.00)">
            <View style={styles.container}>
              <Text>Money</Text>
              <TextInputMask
                type={'money'}
                value={maskmoney.advanced}
                options={{
                  precision: 2,
                  separator: '.',
                  delimiter: ',',
                  unit: 'R$',
                  suffixUnit: '',
                }}
                onChangeText={text => {
                  setMaskmoney({
                    advanced: text,
                  });
                }}
                style={styles.textInputStype}
              />
            </View>
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="type = 'number'，(掩码格式为纯数字)">
            <View style={styles.container}>
              <Text>OnlyNumbers</Text>
              <TextInputMask
                type={'only-numbers'}
                value={masknumber.numbers}
                onChangeText={text => {
                  setMasknumber({
                    numbers: text,
                  });
                }}
                style={styles.textInputStype}
              />
            </View>
          </TestCase>

          <TestCase
            tags={['C_API']}
            itShould="type='zip-code'，(掩码格式为99999-999)">
            <View style={styles.container}>
              <Text>ZipCode</Text>
              <TextInputMask
                type={'zip-code'}
                value={maskzipcode.code}
                onChangeText={text => {
                  setMaskzipcode({
                    code: text,
                  });
                }}
                style={styles.textInputStype}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="options attribute">
          <TestSuite name="Money">
            <TestCase tags={['C_API']} itShould="options = unit(前缀为￥)">
              <View style={styles.container}>
                <Text>Money</Text>
                <TextInputMask
                  type={'money'}
                  value={maskoption.advanced1}
                  options={{
                    unit: '￥',
                  }}
                  onChangeText={text => {
                    setMaskoption({
                      ...maskoption,
                      advanced1: text,
                    });
                  }}
                  style={styles.textInputStype}
                />
              </View>
            </TestCase>

            <TestCase
              tags={['C_API']}
              itShould="options = precision(显示的分数的位数为3)">
              <View style={styles.container}>
                <Text>Money</Text>
                <TextInputMask
                  type={'money'}
                  value={maskoption.advanced2}
                  options={{
                    precision: 3,
                  }}
                  onChangeText={text => {
                    setMaskoption({
                      ...maskoption,
                      advanced2: text,
                    });
                  }}
                  style={styles.textInputStype}
                />
              </View>
            </TestCase>
            <TestCase
              tags={['C_API']}
              itShould="options = delimiter(千位分隔符为 ?)">
              <View style={styles.container}>
                <Text>Money</Text>
                <TextInputMask
                  type={'money'}
                  value={maskoption.advanced3}
                  options={{
                    delimiter: '?',
                  }}
                  onChangeText={text => {
                    setMaskoption({
                      ...maskoption,
                      advanced3: text,
                    });
                  }}
                  style={styles.textInputStype}
                />
              </View>
            </TestCase>

            <TestCase
              tags={['C_API']}
              itShould="options = separator(美分分隔符为；)">
              <View style={styles.container}>
                <Text>Money</Text>
                <TextInputMask
                  type={'money'}
                  value={maskoption.advanced4}
                  options={{
                    separator: ';',
                  }}
                  onChangeText={text => {
                    setMaskoption({
                      ...maskoption,
                      advanced4: text,
                    });
                  }}
                  style={styles.textInputStype}
                />
              </View>
            </TestCase>

            <TestCase
              tags={['C_API']}
              itShould="options = precision(后缀文本为---?)">
              <View style={styles.container}>
                <Text>Money</Text>
                <TextInputMask
                  type={'money'}
                  value={maskoption.advanced5}
                  options={{
                    suffixUnit: '---?',
                  }}
                  onChangeText={text => {
                    setMaskoption({
                      ...maskoption,
                      advanced5: text,
                    });
                  }}
                  style={styles.textInputStype}
                />
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="Cel Phone">
            <TestCase
              tags={['C_API']}
              itShould="option = BRL(掩码格式(99) 9999-9999 or (99) 99999-9999)">
              <View style={styles.container}>
                <TextInputMask
                  type={'cel-phone'}
                  value={maskoption.advanced6}
                  onChangeText={text => {
                    setMaskoption({
                      ...maskoption,
                      advanced6: text,
                    });
                  }}
                  options={{
                    mask: 'BRL',
                  }}
                  style={styles.textInputStype}
                />
              </View>
            </TestCase>

            <TestCase tags={['C_API']} itShould="withDDD: false">
              <View style={styles.container}>
                <TextInputMask
                  type={'cel-phone'}
                  options={{
                    withDDD: false,
                  }}
                  value={maskoption.advanced7}
                  onChangeText={text => {
                    setMaskoption({
                      ...maskoption,
                      advanced7: text,
                    });
                  }}
                  style={styles.textInputStype}
                />
              </View>
            </TestCase>

            <TestCase tags={['C_API']} itShould="withDDD: true">
              <View style={styles.container}>
                <TextInputMask
                  type={'cel-phone'}
                  options={{
                    withDDD: true,
                  }}
                  value={maskoption.advanced8}
                  onChangeText={text => {
                    setMaskoption({
                      ...maskoption,
                      advanced8: text,
                    });
                  }}
                  style={styles.textInputStype}
                />
              </View>
            </TestCase>

            <TestCase tags={['C_API']} itShould="dddMask: '(9999)'">
              <View style={styles.container}>
                <TextInputMask
                  type={'cel-phone'}
                  options={{
                    dddMask: '(9999) ',
                  }}
                  value={maskoption.advanced9}
                  onChangeText={text => {
                    setMaskoption({
                      ...maskoption,
                      advanced9: text,
                    });
                  }}
                  style={styles.textInputStype}
                />
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="Datetime">
            <TestCase
              tags={['C_API']}
              itShould=" format: 'YYYY/MM/DD'(掩码格式为YYYY/MM/DD)">
              <View style={styles.container}>
                <Text>Datetime</Text>
                <TextInputMask
                  type={'datetime'}
                  options={{
                    format: 'YYYY/MM/DD',
                  }}
                  value={maskoption.advanced10}
                  onChangeText={text => {
                    setMaskoption({
                      ...maskoption,
                      advanced10: text,
                    });
                  }}
                  style={styles.textInputStype}
                />
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="Credit">
            <TestCase
              tags={['C_API']}
              itShould="obfuscated: false,(掩码格式为9999 9999 9999 9999)">
              <View style={styles.container}>
                <TextInputMask
                  type={'credit-card'}
                  value={maskoption.advanced11}
                  options={{
                    obfuscated: false,
                  }}
                  onChangeText={text => {
                    setMaskoption({
                      ...maskoption,
                      advanced11: text,
                    });
                  }}
                  style={styles.textInputStype}
                />
              </View>
            </TestCase>

            <TestCase
              tags={['C_API']}
              itShould="obfuscated: true(掩码格式为 9999 **** **** 9999)">
              <View style={styles.container}>
                <TextInputMask
                  type={'credit-card'}
                  value={maskoption.advanced12}
                  options={{
                    obfuscated: true,
                  }}
                  onChangeText={text => {
                    setMaskoption({
                      ...maskoption,
                      advanced12: text,
                    });
                  }}
                  style={styles.textInputStype}
                />
              </View>
            </TestCase>

            <TestCase
              tags={['C_API']}
              itShould="issuer:'amex'，(掩码格式为9999 999999 99999 or 9999 ****** 99999)">
              <View style={styles.container}>
                <TextInputMask
                  type={'credit-card'}
                  value={maskoption.advanced13}
                  options={{
                    issuer: 'amex',
                  }}
                  onChangeText={text => {
                    setMaskoption({
                      ...maskoption,
                      advanced13: text,
                    });
                  }}
                  style={styles.textInputStype}
                />
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="Custom">
            <TestCase
              tags={['C_API']}
              itShould="mask: '999 AAA SSS ***'(掩码格式为999 AAA SSS ***)">
              <View style={styles.container}>
                <TextInputMask
                  type={'custom'}
                  value={maskoption.advanced14}
                  options={{
                    mask: '999 AAA SSS ***',
                  }}
                  onChangeText={text => {
                    setMaskoption({
                      ...maskoption,
                      advanced14: text,
                    });
                  }}
                  style={styles.textInputStype}
                />
              </View>
            </TestCase>

            <TestCase
              tags={['C_API']}
              itShould="validator: function (value, settings) {return true;}(验证为true)"
              initialState={false}
              arrange={({setState, reset}) => (
                <View style={{flexDirection: 'column'}}>
                  <View style={styles.container}>
                    <TextInputMask
                      type={'custom'}
                      value={maskoption.advanced15}
                      options={{
                        mask: '9999/99/99',
                        validator: function (value, settings) {
                          return true;
                        },
                      }}
                      onChangeText={text => {
                        setMaskoption({
                          ...maskoption,
                          advanced15: text,
                        });
                      }}
                      style={styles.textInputStype}
                      ref={divRef3}
                    />
                  </View>
                  <Text>验证结果为：{`${bol == undefined ? '' : bol}`}</Text>
                  <Button
                    title="CustomTest"
                    onPress={() => {
                      if (divRef3.current.isValid()) {
                        setState(true);
                      }
                      bol = divRef3.current.isValid();
                    }}
                  />
                  <Button title="reset" onPress={reset} />
                </View>
              )}
              assert={({state, expect}) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              tags={['C_API']}
              itShould="translation: {A: function (val) {return [' ', '#', ',', '.', '!'].indexOf(val) >= 0? val: null;},}(自定义格式使用A代替*遮掩)"
              initialState={false}
              arrange={({setState, reset}) => (
                <View style={{flexDirection: 'column'}}>
                  <View style={styles.container}>
                    <TextInputMask
                      type={'custom'}
                      value={maskoption.advanced16}
                      options={{
                        mask: '999 *** AAA',
                        translation: {
                          'A': function (val) {
                            return [' ', '#', ',', '.', '!'].indexOf(val) >= 0
                              ? val
                              : null;
                          },
                        },
                      }}
                      onChangeText={text => {
                        setMaskoption({
                          ...maskoption,
                          advanced16: text,
                        });
                      }}
                      style={styles.textInputStype}
                      ref={divRef5}
                    />
                  </View>
                </View>
              )}
              assert={({state, expect}) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              tags={['C_API']}
              itShould="getRawValue: function (value, settings) {return 'my converted value';}(getRawValue的返回值为'my converted value')"
              initialState={false}
              arrange={({setState, reset}) => (
                <View style={{flexDirection: 'column'}}>
                  <View style={styles.container}>
                    <Text>输入格式为AA-99-99-99-A</Text>
                    <TextInputMask
                      type={'custom'}
                      value={maskoption.advanced17}
                      options={{
                        mask: 'AA-99-99-99-A',
                        getRawValue: function (value, settings) {
                          return 'my converted value';
                        },
                      }}
                      onChangeText={text => {
                        setMaskoption({
                          ...maskoption,
                          advanced17: text,
                        });
                      }}
                      style={styles.textInputStype}
                      ref={divRef4}
                    />
                  </View>
                  <Text>{str}</Text>
                  <Button
                    title="CustomTest"
                    onPress={() => {
                      str = divRef4.current.getRawValue();
                      if (divRef4.current.getRawValue()) {
                        setState(true);
                      }
                    }}
                  />
                  <Button title="reset" onPress={reset} />
                </View>
              )}
              assert={({state, expect}) => {
                expect(state).to.be.true;
              }}
            />
          </TestSuite>
        </TestSuite>
        <TestSuite name="isValid">
          {/* custom通过测试 */}
          <TestCase
            tags={['C_API']}
            itShould="custom (isValid接口在custom类型是否正确)"
            initialState={false}
            arrange={({setState, reset}) => (
              <View style={{flexDirection: 'column'}}>
                <View style={styles.container}>
                  <Text>custom</Text>
                  <TextInputMask
                    type={'custom'}
                    value={valid7.value}
                    includeRawValueInChangeText={true}
                    options={{
                      mask: '999 AAA SSS ***',
                      validator: function (value, settings) {
                        return true;
                      },
                    }}
                    onChangeText={(text, rawValue) => {
                      setValid7({
                        value: text,
                        raw: rawValue,
                      });
                    }}
                    // refInput={()=>{}}
                    ref={divRef7}
                    style={styles.textInputStype}
                  />
                  <Text>value: {valid7.value}</Text>
                  <Text>Raw: {valid7.raw}</Text>
                </View>
                <Button
                  title="isValid"
                  onPress={() => {
                    if (divRef7.current.isValid()) {
                      setState(true);
                    }
                    console.log(
                      MaskService.isValid('custom', valid7.value, {
                        mask: '999 AAA SSS ***',
                        validator: function (value, settings) {
                          return true;
                        },
                      }),
                      valid7.value,
                    );
                  }}
                />
                <Button title="reset" onPress={reset} />
              </View>
            )}
            assert={({state, expect}) => {
              expect(state).to.be.true;
            }}
          />
          {/* CNPJ测试 */}
          <TestCase
            tags={['C_API']}
            itShould="CNPJ (isValid接口是否正确，正确的cnpj示例：54.651.716/0011-50)"
            initialState={false}
            arrange={({setState, reset}) => (
              <View style={{flexDirection: 'column'}}>
                <View style={styles.container}>
                  <Text>CNPJ</Text>
                  <TextInputMask
                    type={'cnpj'}
                    value={valid6.value}
                    includeRawValueInChangeText={true}
                    onChangeText={(text, rawValue) => {
                      setValid6({
                        value: text,
                        raw: rawValue,
                      });
                    }}
                    ref={divRef6}
                    style={styles.textInputStype}
                  />
                  <Text>value: {valid6.value}</Text>
                  <Text>Raw: {valid6.raw}</Text>
                </View>
                <Button
                  title="isValid"
                  onPress={() => {
                    if (divRef6.current.isValid()) {
                      setState(true);
                    }
                    console.log(
                      MaskService.isValid('cnpj', valid6.value, {}),
                      valid6.value,
                    );
                  }}
                />
                <Button title="reset" onPress={reset} />
              </View>
            )}
            assert={({state, expect}) => {
              expect(state).to.be.true;
            }}
          />
          {/* credit-card通过测试 */}
          <TestCase
            tags={['C_API']}
            itShould="credit-card (isValid接口在credit-card是否正确)"
            initialState={false}
            arrange={({setState, reset}) => (
              <View style={{flexDirection: 'column'}}>
                <View style={styles.container}>
                  <Text>credit-card</Text>
                  <TextInputMask
                    type={'credit-card'}
                    value={valid5.value}
                    includeRawValueInChangeText={true}
                    options={{
                      obfuscated: false,
                      issuer: 'amex',
                    }}
                    onChangeText={(text, rawValue) => {
                      setValid5({
                        value: text,
                        raw: rawValue,
                      });
                    }}
                    ref={divRef14}
                    style={styles.textInputStype}
                  />
                  <Text>value: {valid5.value}</Text>
                  <Text>Raw: {valid5.raw}</Text>
                </View>
                <Button
                  title="isValid"
                  onPress={() => {
                    if (divRef14.current.isValid()) {
                      setState(true);
                    }
                    console.log(
                      MaskService.isValid('credit-card', valid5.value, {
                        obfuscated: false,
                        issuer: 'amex',
                      }),
                      valid5.value,
                    );
                  }}
                />
                <Button title="reset" onPress={reset} />
              </View>
            )}
            assert={({state, expect}) => {
              expect(state).to.be.true;
            }}
          />
          {/* cel-phone通过测试 */}
          <TestCase
            tags={['C_API']}
            itShould="cel-phone (isValid接口在cel-phone是否正确)"
            initialState={false}
            arrange={({setState, reset}) => (
              <View style={{flexDirection: 'column'}}>
                <View style={styles.container}>
                  <Text>cel-phone</Text>
                  <TextInputMask
                    type={'cel-phone'}
                    value={valid11.value}
                    includeRawValueInChangeText={true}
                    options={{
                      maskType: 'BRL',
                      withDDD: true,
                      dddMask: '(99) ',
                    }}
                    onChangeText={(text, rawValue) => {
                      setValid11({
                        value: text,
                        raw: rawValue,
                      });
                    }}
                    ref={divRef10}
                    style={styles.textInputStype}
                  />
                  <Text>value: {valid11.value}</Text>
                  <Text>Raw: {valid11.raw}</Text>
                </View>
                <Button
                  title="isValid"
                  onPress={() => {
                    if (divRef10.current.isValid()) {
                      setState(true);
                    }
                  }}
                />
                <Button title="reset" onPress={reset} />
              </View>
            )}
            assert={({state, expect}) => {
              expect(state).to.be.true;
            }}
          />
          {/* cpf测试通过 */}
          <TestCase
            tags={['C_API']}
            itShould="CPF (isValid接口是否正确,正确的cpf示例：007.408.869-67)"
            initialState={false}
            arrange={({setState, reset}) => (
              <View style={{flexDirection: 'column'}}>
                <View style={styles.container}>
                  <Text>CPF</Text>
                  <TextInputMask
                    type={'cpf'}
                    value={valid10.value}
                    includeRawValueInChangeText={true}
                    onChangeText={(text, rawValue) => {
                      setValid10({
                        value: text,
                        raw: rawValue,
                      });
                    }}
                    ref={divRef11}
                    style={styles.textInputStype}
                  />
                  <Text>value: {valid10.value}</Text>
                  <Text>Raw: {valid10.raw}</Text>
                </View>
                <Button
                  title="isValid"
                  onPress={() => {
                    if (divRef11.current.isValid()) {
                      setState(true);
                    }
                    console.log(
                      MaskService.isValid('cpf', valid10.value, {}),
                      '------123',
                    );
                  }}
                />
                <Button title="reset" onPress={reset} />
              </View>
            )}
            assert={({state, expect}) => {
              expect(state).to.be.true;
            }}
          />
          {/* money通过测试 */}
          <TestCase
            tags={['C_API']}
            itShould="money (isValid接口在money是否正确)"
            initialState={false}
            arrange={({setState, reset}) => (
              <View style={{flexDirection: 'column'}}>
                <View style={styles.container}>
                  <Text>money</Text>
                  <TextInputMask
                    type={'money'}
                    value={valid3.value}
                    includeRawValueInChangeText={true}
                    options={{
                      unit: 'US$',
                      separator: '.',
                      delimiter: ',',
                    }}
                    onChangeText={(text, rawValue) => {
                      setValid3({
                        value: text,
                        raw: rawValue,
                      });
                    }}
                    ref={divRef12}
                    style={styles.textInputStype}
                  />
                  <Text>value: {valid3.value}</Text>
                  <Text>Raw: {valid3.raw}</Text>
                </View>
                <Button
                  title="isValid"
                  onPress={() => {
                    if (divRef12.current.isValid()) {
                      setState(true);
                    }
                    console.log(
                      MaskService.isValid('money', valid3.value, {
                        unit: 'US$',
                        separator: '.',
                        delimiter: ',',
                      }),
                    );
                  }}
                />
                <Button title="reset" onPress={reset} />
              </View>
            )}
            assert={({state, expect}) => {
              expect(state).to.be.true;
            }}
          />
          {/* zip-code通过测试 */}
          <TestCase
            tags={['C_API']}
            itShould="zip-code (isValid接口在zip-code是否正确)"
            initialState={false}
            arrange={({setState, reset}) => (
              <View style={{flexDirection: 'column'}}>
                <View style={styles.container}>
                  <Text>zip-code</Text>
                  <TextInputMask
                    type={'zip-code'}
                    value={valid4.value}
                    includeRawValueInChangeText={true}
                    onChangeText={(text, rawValue) => {
                      setValid4({
                        value: text,
                        raw: rawValue,
                      });
                    }}
                    ref={divRef13}
                    style={styles.textInputStype}
                  />
                  <Text>value: {valid4.value}</Text>
                  <Text>Raw: {valid4.raw}</Text>
                </View>
                <Button
                  title="isValid"
                  onPress={() => {
                    if (divRef13.current.isValid()) {
                      setState(true);
                    }
                    console.log(
                      MaskService.isValid('zip-code', valid4.value, {}),
                    );
                  }}
                />
                <Button title="reset" onPress={reset} />
              </View>
            )}
            assert={({state, expect}) => {
              expect(state).to.be.true;
            }}
          />
          {/* only-numbers通过测试 */}
          <TestCase
            tags={['C_API']}
            itShould="Only Numbers (isValid接口在only-numbers是否正确)"
            initialState={false}
            arrange={({setState, reset}) => (
              <View style={{flexDirection: 'column'}}>
                <View style={styles.container}>
                  <Text>Only Numbers</Text>
                  <TextInputMask
                    type={'only-numbers'}
                    value={valid8.value}
                    includeRawValueInChangeText={true}
                    onChangeText={(text, rawValue) => {
                      setValid8({
                        value: text,
                        raw: rawValue,
                      });
                    }}
                    ref={divRef8}
                    style={styles.textInputStype}
                  />
                  <Text>value: {valid8.value}</Text>
                  <Text>Raw: {valid8.raw}</Text>
                </View>
                <Button
                  title="isValid"
                  onPress={() => {
                    if (divRef8.current.isValid()) {
                      setState(true);
                    }
                    console.log(
                      MaskService.isValid('only-numbers', valid8.value, {}),
                    );
                  }}
                />
                <Button title="reset" onPress={reset} />
              </View>
            )}
            assert={({state, expect}) => {
              expect(state).to.be.true;
            }}
          />
          {/* Datetime通过测试 */}
          <TestCase
            tags={['C_API']}
            itShould="Datetime (isValid接口在Datetime是否正确)"
            initialState={false}
            arrange={({setState, reset}) => (
              <View style={{flexDirection: 'column'}}>
                <View style={styles.container}>
                  <Text>Datetime</Text>
                  <TextInputMask
                    type={'datetime'}
                    value={valid9.value}
                    includeRawValueInChangeText={true}
                    options={{
                      format: 'YYYY/MM/DD',
                    }}
                    onChangeText={text => {
                      setValid9({
                        ...valid9,
                        value: text,
                      });
                    }}
                    ref={divRef9}
                    style={styles.textInputStype}
                  />
                  <Text>DatetimeValue: {valid9.value}</Text>
                </View>
                <Button
                  title="isValid"
                  onPress={() => {
                    if (divRef9.current.isValid()) {
                      setState(true);
                    }
                    console.log(
                      MaskService.isValid('datetime', valid9.value, {
                        format: 'YYYY/MM/DD',
                      }),
                    );
                  }}
                />
                <Button title="reset" onPress={reset} />
              </View>
            )}
            assert={({state, expect}) => {
              expect(state).to.be.true;
            }}
          />
        </TestSuite>
        <TestSuite name="toMask">
          <TestCase
            tags={['C_API']}
            itShould="toMask(判断toMask接口生成的掩码是否正确)"
            initialState={false}
            arrange={({setState, reset}) => (
              <View style={{flexDirection: 'column'}}>
                <View style={styles.container}>
                  <Text>CPF</Text>
                  <TextInputMask
                    type={'cpf'}
                    value={maskto.value}
                    includeRawValueInChangeText={true}
                    onChangeText={(text, rawValue) => {
                      setMaskto({
                        value: text,
                        raw: rawValue,
                      });
                    }}
                    style={styles.textInputStype}
                  />
                  <Text>value: {maskto.value}</Text>
                  <Text>Raw: {maskto.raw}</Text>
                </View>

                <Button
                  title="toMask"
                  onPress={() => {
                    if (
                      MaskService.toMask('cpf', maskto.value) == maskto.value
                    ) {
                      setState(true);
                    }
                  }}
                />
                <Button title="reset" onPress={reset} />
              </View>
            )}
            assert={({state, expect}) => {
              expect(state).to.be.true;
            }}
          />
        </TestSuite>
        <TestSuite name="toRawValue">
          <TestCase
            tags={['C_API']}
            itShould="toRawValue(判断toRawValue接口获取屏蔽值的原始值是否正确)"
            initialState={false}
            arrange={({setState, reset}) => (
              <View style={{flexDirection: 'column'}}>
                <View style={styles.container}>
                  <Text>CPF</Text>
                  <TextInputMask
                    type={'cpf'}
                    value={masktoRow.value}
                    includeRawValueInChangeText={true}
                    onChangeText={(text, rawValue) => {
                      setMasktoRow({
                        value: text,
                        raw: rawValue,
                      });
                    }}
                    style={styles.textInputStype}
                  />
                  <Text>value: {masktoRow.value}</Text>
                  <Text>Raw: {masktoRow.raw}</Text>
                </View>
                <Button
                  title="toRawValue"
                  onPress={() => {
                    if (
                      MaskService.toRawValue('cpf', masktoRow.value, {}) ==
                      masktoRow.raw
                    ) {
                      setState(true);
                    }
                  }}
                />
                <Button title="reset" onPress={reset} />
              </View>
            )}
            assert={({state, expect}) => {
              expect(state).to.be.true;
            }}
          />
        </TestSuite>
        <TestSuite name="getMask">
          <TestCase
            tags={['C_API']}
            itShould="getMask(判断getMask接口生成的格式是否为正确的格式，比如'YYYY/MM/DD')"
            initialState={false}
            arrange={({setState, reset}) => (
              <View style={{flexDirection: 'column'}}>
                <View style={styles.container}>
                  <Text>getMask</Text>
                  <TextInputMask
                    type={'datetime'}
                    value={maskgetMask.value}
                    includeRawValueInChangeText={true}
                    options={{
                      format: 'YYYY/MM/DD',
                    }}
                    onChangeText={(text, rawValue) => {
                      setMaskgetMask({
                        ...maskgetMask,
                        value: text,
                      });
                    }}
                    style={styles.textInputStype}
                  />
                  <Text>value: {maskgetMask.value}</Text>
                </View>
                <Button
                  title="toRawValue"
                  onPress={() => {
                    if (
                      MaskService.getMask('datetime', '123123', {
                        format: 'YYYY/MM/DD',
                      }) == '9999/99/99'
                    ) {
                      setState(true);
                    }
                  }}
                />
                <Button title="reset" onPress={reset} />
              </View>
            )}
            assert={({state, expect}) => {
              expect(state).to.be.true;
            }}
          />
        </TestSuite>
      </Tester>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textInputStype: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
  },
});
