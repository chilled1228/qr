'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Eye, Server, Trash2 } from 'lucide-react';

export function PrivacyPolicy() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="link" className="p-0 h-auto text-sm text-foreground-secondary hover:text-foreground">
          Privacy Policy
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-success" />
            Privacy Policy & Data Transparency
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 text-sm">
          {/* Data Collection */}
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <Eye className="h-4 w-4 text-primary" />
              What Data We Collect
            </h3>
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-medium text-success mb-2">✓ We DO NOT collect or store:</p>
              <ul className="list-disc list-inside space-y-1 text-foreground-secondary">
                <li>Your UPI ID or payment information</li>
                <li>Personal identification details</li>
                <li>Transaction history or amounts</li>
                <li>Generated QR codes on our servers</li>
              </ul>
            </div>
            <div className="bg-info/10 p-4 rounded-lg">
              <p className="font-medium text-info-foreground mb-2">ℹ We only collect:</p>
              <ul className="list-disc list-inside space-y-1 text-foreground-secondary">
                <li>Anonymous usage analytics (page views, clicks)</li>
                <li>Technical data for performance optimization</li>
                <li>No personally identifiable information</li>
              </ul>
            </div>
          </div>

          {/* Data Processing */}
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <Server className="h-4 w-4 text-secondary" />
              How We Process Your Data
            </h3>
            <div className="space-y-2">
              <p><strong>Client-Side Processing:</strong> All QR code generation happens in your browser. Your UPI details never leave your device.</p>
              <p><strong>No Server Storage:</strong> We don't store any form data, UPI IDs, or generated QR codes on our servers.</p>
              <p><strong>Temporary Memory:</strong> Data exists only in your browser's memory while you use the tool.</p>
            </div>
          </div>

          {/* Security Measures */}
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <Lock className="h-4 w-4 text-success" />
              Security Measures
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>SSL/TLS encryption for all data transmission</li>
              <li>No database storage of sensitive information</li>
              <li>Client-side validation and processing</li>
              <li>Regular security audits and updates</li>
            </ul>
          </div>

          {/* Data Deletion */}
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <Trash2 className="h-4 w-4 text-destructive" />
              Data Deletion
            </h3>
            <p>Since we don't store your personal data, there's nothing to delete from our servers. Simply:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Close your browser tab to clear temporary data</li>
              <li>Clear your browser cache if desired</li>
              <li>Your data is automatically removed from memory</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <h3 className="font-semibold">Contact Us</h3>
            <p>If you have questions about this privacy policy or our data practices:</p>
            <div className="bg-muted p-3 rounded">
              <p className="text-foreground-secondary">
                This is a demonstration application. In production, include actual contact information here.
              </p>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-xs text-foreground-muted border-t pt-4">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>This policy is designed to be transparent about our minimal data collection practices.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
