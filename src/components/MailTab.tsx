import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ClipboardList } from "lucide-react";
type MailTabProps = {
	name: string;
};
const generateHtmlContent = (name: string) => `
<html><head></head><body><p>Dear ${name},</p>
<p>Congratulations, your account has just been created.</p>
<p>Find your account number below</p>
<br>
<p>Account number: 8681042518</p>
<p>Bank: sterling</p>
<br>
<p>Please fund your wallet with the account number above 👆to start transacting</p>
<br>
<p>Best,</p>
<p>Idbanc Team 💚</p>
</body></html>
`;

const generatePlainTextContent = (name:string) => `Dear ${name},

Congratulations, your account has just been created.

Find your account number below

Account number: 8681042518
Bank: sterling

Please fund your wallet with the account number above 👆 to start transacting

Best,
Idbanc Team 💚
`;

const generateSourceContent = (name:string) => `
<html><head></head><body><p>Dear ${name},</p>
<p>Congratulations, your account has just been created.</p>
<p>Find your account number below</p>
<br>
<p>Account number: 8681042518</p>
<p>Bank: sterling</p>
<br>
<p>Please fund your wallet with the account number above 👆to start transacting</p>
<br>
<p>Best,</p>
<p>Idbanc Team 💚</p>
</body></html>
`;



const MailTab = ({ name }: MailTabProps) => {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = (content: string) => {
		navigator.clipboard
			.writeText(content)
			.then(() => {
				setCopied(true);
				setTimeout(() => setCopied(false), 2000);
			})
			.catch((err) => {
				alert("Failed to copy content!");
			});
	};

	return (
		<div className="ml-16 my-8  max-w-6xl rounded-md border-2 border-gray-300">
			<div className="">
				<div className="relative flex justify-between px-10 pb-3 pt-4">
					<Tabs defaultValue="HTML" className="w-full">
						<div className="flex justify-between w-full">
							<TabsList className="flex space-x-4">
								<TabsTrigger value="HTML">HTML</TabsTrigger>
								<TabsTrigger value="plain">Plain Text</TabsTrigger>
								<TabsTrigger value="source">Source</TabsTrigger>
							</TabsList>
							{copied ? (
								<Check className="cursor-pointer" size={24} />
							) : (
								<ClipboardList
									size={24}
									className="cursor-pointer"
									color="gray"
									onClick={() => copyToClipboard(generateHtmlContent(name))}
								/>
							)}
						</div>
						<TabsContent value="HTML" className="py-5">
							<div>
								<pre className="whitespace-pre-wrap">
									{generatePlainTextContent(name)}
								</pre>
							</div>
						</TabsContent>
						<TabsContent value="plain" className="py-5">
							<div>
								<pre className="whitespace-pre-wrap">
									{generatePlainTextContent(name)}
								</pre>
							</div>
						</TabsContent>
						<TabsContent value="source" className="py-5">
							<div className="bg-black text-white p-4 rounded-md">
								<pre className="whitespace-pre">
									{generateSourceContent(name)}
								</pre>
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</div>
	);
};

export default MailTab;
