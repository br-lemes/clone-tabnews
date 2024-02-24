import { StatusResponse, statusSchema } from '@/schemas/statusSchema';
import { validateSchema } from '@/schemas/validateSchema';

test('GET to /api/v1/status should return 200', async () => {
    const response = await fetch('http://localhost:3000/api/v1/status');
    expect(response.status).toBe(200);

    const data = await response.json() as StatusResponse;
    expect(() => validateSchema(statusSchema, data)).not.toThrow();
    expect(data.dependencies.database.version).toBe('16.0');
    expect(data.dependencies.database.opened_connections).toBe(1);
});
