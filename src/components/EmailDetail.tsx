"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Define the type for mail details
type MailDetails = {
	id: string;
	to: string;
	status: string;
	subject: string;
	sent: string;
};

export default function EmailDetails() {
	const searchParams = useSearchParams();
	const [mailDetails, setMailDetails] = useState<MailDetails | null>(null);

	useEffect(() => {
		const id = searchParams.get("id");
		const to = searchParams.get("to");
		const status = searchParams.get("status");
		const subject = searchParams.get("subject");
		const sent = searchParams.get("sent");

		if (id && to && status && subject && sent) {
			setMailDetails({ id, to, status, subject, sent });
		}
	}, [searchParams]);

	if (!mailDetails) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>Mail Details</h1>
			<p>ID: {mailDetails.id}</p>
			<p>To: {mailDetails.to}</p>
			<p>Status: {mailDetails.status}</p>
			<p>Subject: {mailDetails.subject}</p>
			<p>Sent: {mailDetails.sent}</p>
		</div>
	);
}
