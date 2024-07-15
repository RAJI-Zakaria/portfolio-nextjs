"use client";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Slider,
  CheckboxGroup,
  Checkbox,
} from "@nextui-org/react";

import { generateSecureKey } from "./tools";
import toast from "react-hot-toast";

const SecureKeyGenCard = () => {
  const [options, setOptions] = useState<string[]>([]);
  const [length, setLength] = useState<number>(6);
  const [password, setPassword] = useState<string>("KLJHKa#@(*#@");

  return (
    <Card className="py-10 px-3 md:px-0 w-full md:w-[600px] space-y-10">
      <CardHeader className="pb-0 pt-2 px-4 flex-col space-y-4">
        <Image src="/password.gif" height={100} width={100} alt="password" />
        <h1 className="text-2xl font-bold text-default-900 ">
          PASSWORD GENERATOR
        </h1>

        <h3
          className="text-2xl font-bold  cursor-pointer bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent"
          onClick={() => {
            navigator.clipboard.writeText(password);
            toast.success("Password copied to clipboard");
          }}
        >
          {password}
        </h3>
      </CardHeader>
      <CardBody className="overflow-visible py-2  px-5 md:p-0 md:px-24 ">
        <Slider
          size="md"
          step={1}
          color="foreground"
          label="Password Length"
          showSteps={true}
          maxValue={24}
          minValue={6}
          defaultValue={8}
          className="w-full"
          onChange={(val) => {
            const lgt = val as number;
            const pass = generateSecureKey(lgt, options);
            setLength(lgt);
            setPassword(pass);
          }}
        />
        <br />
        <div className="flex flex-col gap-5">
          <CheckboxGroup
            label="Make you password more secure"
            color="warning"
            value={options}
            onValueChange={(val) => {
              setOptions(val);
              const pass = generateSecureKey(length, val);
              setPassword(pass);
            }}
          >
            <Checkbox value="uppercase">Uppercase</Checkbox>
            <Checkbox value="lowercase">Lowercase</Checkbox>
            <Checkbox value="numbers">Numbers</Checkbox>
            <Checkbox value="special-chars">Special Characters</Checkbox>
          </CheckboxGroup>
          <p className="text-default-500 text-small">
            {options.length === 0
              ? "Maybe you should select some options"
              : "Selected: " + options.join(", ")}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

export default SecureKeyGenCard;
