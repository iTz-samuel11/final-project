"""empty message

Revision ID: 2c211aa75469
Revises: d5d21c7b8075
Create Date: 2022-07-25 19:09:29.701667

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2c211aa75469'
down_revision = 'd5d21c7b8075'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('password_hash', sa.String(length=250), nullable=False))
    op.add_column('user', sa.Column('user_salt', sa.String(length=120), nullable=False))
    op.drop_column('user', 'password')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('password', sa.VARCHAR(length=80), autoincrement=False, nullable=False))
    op.drop_column('user', 'user_salt')
    op.drop_column('user', 'password_hash')
    # ### end Alembic commands ###
